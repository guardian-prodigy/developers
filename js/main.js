const information = [
    {
      id: 1,
      name: "wiraysha",
      img: "./images/person-1.jpeg",
      job: "Letter-designer",
      age: 17,
      text: `tenetur deserunt expedita sit debitis, sapiente quos unde omnis culpa,
          iste modi! Doloribus velit accusantium quod porro illum eos voluptas?`,
    },
    {
      id: 2,
      name: "akash",
      img: "./images/person-1.jpeg",
      job: "Web-designer",
      age: 17,
      text: `tenetur deserunt expedita sit debitis, sapiente quos unde omnis culpa,
          iste modi! Doloribus velit accusantium quod porro illum eos voluptas?`,
    },
    {
      id: 3,
      name: "iva",
      img: "./images/person-1.jpeg",
      job: `digital-art`,
      age: 19,
      text: `tenetur deserunt expedita sit debitis, sapiente quos unde omnis culpa,
          iste modi! Doloribus velit accusantium quod porro illum eos voluptas?`,
    },
    {
      id: 4,
      name: "joelle",
      img: "./images/person-1.jpeg",
      job: "entrepreneur",
      age: 17,
      text: `tenetur deserunt expedita sit debitis, sapiente quos unde omnis culpa,
          iste modi! Doloribus velit accusantium quod porro illum eos voluptas?`,
    },
    {
      id: 5,
      name: "mariska",
      img: "./images/person-1.jpeg",
      job: "Baker",
      age: 17,
      text: `tenetur deserunt expedita sit debitis, sapiente quos unde omnis culpa,
          iste modi! Doloribus velit accusantium quod porro illum eos voluptas?`,
    },
    {
      id: 6,
      name: "jael",
      img: "./images/person-1.jpeg",
      job: "programmers",
      age: 17,
      text: `tenetur deserunt expedita sit debitis, sapiente quos unde omnis culpa,
          iste modi! Doloribus velit accusantium quod porro illum eos voluptas?`,
    },
    {
      id: 7,
      name: "shrishti",
      img: "./images/person-1.jpeg",
      job: `nail-salon`,
      age: 18,
      text: `tenetur deserunt expedita sit debitis, sapiente quos unde omnis culpa,
          iste modi! Doloribus velit accusantium quod porro illum eos voluptas?`,
    },
  ];
  const sectionCenter = document.querySelector(".section-center");
  const sectionBtn = document.querySelector(".btn-container");
  const btnsidebar = document.querySelectorAll(".btn-js");
  const sidebar = document.querySelector(".btns-section");
  const shown = document.querySelector(".btns-show");
  window.addEventListener(
    "DOMContentLoaded",
    () => displayInfo(information),
    displayBtns(information),
    Sidebar()
  );
  function displayInfo(passedParam) {
    const info = passedParam
      .map(
        (item) => `<article>
      <div class="header">
        <h3>${item.name}</h3>
      </div>
      <div class="img-container">
        <img src=${item.img} alt="" />
      </div>
      <div class="name-container">
        <div class="name-info">
          <p>${item.job}</p>
          <p>age: ${item.age}</p>
        </div>
        <div class="underline"></div>
      </div>
      <div class="text">
        ${item.text}
      </div>
    </article>`
      )
      .join("");
    // let iconTimes = `<i class="fas fa-bars"></i>`
    sectionCenter.innerHTML = `${info}`;
  };
  function displayBtns(params) {
    let job = params.reduce(
      (acc, curr) => {
        if (!acc.includes(curr.job)) {
          acc.push(curr.job);
        }
        return acc;
      },
      ["all"]
    );
    const FilterBtn = job
      .map(
        (job) => `<button type="button" class="filter-btn" data-id=${job}>
      ${job}
    </button>`
      )
      .join("");
    sectionBtn.innerHTML = FilterBtn;
    const btns = document.querySelectorAll(".filter-btn");
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let jobNumber = e.currentTarget.dataset.id;
        let btnreturn = information.filter((item) => {
          if (item.job === jobNumber) {
            return item;
          }
        });
        if (jobNumber === "all") {
          return displayInfo(information);
        } else if (jobNumber !== "all") {
          return displayInfo(btnreturn);
        }
      });
    });
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let toggle = e.target;
        if (toggle) {
          sidebar.classList.remove("btns-show");
        }
      });
    });
  };
  function Sidebar() {
    btnsidebar.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let styles = e.currentTarget.classList;
        console.log(styles);
        if (styles.contains("open-btn")) {
          sidebar.classList.toggle("btns-show");
        }
        if (styles.contains("close-btn")) {
          sidebar.classList.remove("btns-show");
        }
      });
    });
  };