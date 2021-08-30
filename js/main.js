const information = [
  {
    id: 1,
    name: "akash",
    img: "./images/Akash.jpg",
    job: "Web-designer",
    age: 17,
    text: `Hello everyone I am Akash, creator and owner of this website. My specialty is web-development (HTML, CSS, and Javascript). For more information, please contact me using my social media listed below!`,
    socialMedia: `<li class="icon">
    <a href="https://wa.me/+5977624268"
      ><i class="fab fa-whatsapp"></i
    ></a>
  </li>
  <li class="icon">
    <a href="https://instagram.com/thunderous_angel/"
      ><i class="fab fa-instagram"></i
    ></a>
  </li>
  <li class="icon">
    <a href="https://www.fiverr.com/akash_lewis?up_rollout=true"><i class="fas fa-sitemap"></i></a>
  </li>`,
  },
  {
    id: 2,
    name: "wiraysha",
    img: "./images/Wiraysha.png",
    job: "creator",
    age: 16,
    text: `Hello everyone I am Wiraysha. I make letters, pompoms, bears, and much more! Please visit my social media listed down below to see some examples of my work.`,
    socialMedia: `<li class="icon">
    <a href="https://instagram.com/wiraysha_workshop?igshid=4byv5ud4kl4f"
      ><i class="fab fa-instagram"></i
    ></a>
  </li>
  <li class="icon">
    <a href="https://www.facebook.com/profile.php?id=100070475412876"><i class="fab fa-facebook"></i></a>
  </li><li class="icon"><a href="https://guardian-prodigy.github.io/Wifey-s-website.github.io/wiraysha-website.html"><i class="fas fa-compass"></i></a></li>`,
  },
  {
    id: 3,
    name: "shrishti",
    img: "./images/Shrishti.png",
    job: `nail-Salon`,
    age: 18,
    text: `Hello Everyone I am Shrishti! I help my aunt with placing acrylic nails and gel polishing. For some examples of our work, please visit our instagram/facebook page.`,
    socialMedia: `<li class="icon"><a href="https://instagram.com/priy_nails?utm_medium=copy_link"><i class="fab fa-instagram"></i></a></li>
      <li class="icon"><a href="https://www.facebook.com/priynailss/"><i class="fab fa-facebook"></i></a></li>`,
  },
  {
    id: 4,
    name: "mariska",
    img: "./images/Mariska.png",
    job: "model",
    age: 16,
    text: `Hey everyone I'm Mariska! I love modeling and am already doing so. Down below are my modeling social media.`,
    socialMedia: `<li class="icon">
    <a href="https://www.instagram.com/mariska.vdw/"
      ><i class="fab fa-instagram"></i
    ></a>
  </li>`,
  },
  // {
  //   id: 5,
  //   name: "iva",
  //   img: "./images/person-1.jpeg",
  //   job: `digital-art`,
  //   age: 19,
  //   text: `tenetur deserunt expedita sit debitis, sapiente quos unde omnis culpa,
  //         iste modi! Doloribus velit accusantium quod porro illum eos voluptas?`,
  // },
  // {
  //   id: 6,
  //   name: "joelle",
  //   img: "./images/person-1.jpeg",
  //   job: "entrepreneur",
  //   age: 17,
  //   text: ``,
  // },
  // {
  //   id: 7,
  //   name: "jael",
  //   img: "./images/person-1.jpeg",
  //   job: "programmers",
  //   age: 17,
  //   text: `tenetur deserunt expedita sit debitis, sapiente quos unde omnis culpa,
  //         iste modi! Doloribus velit accusantium quod porro illum eos voluptas?`,
  // },
];
const sectionCenter = document.querySelector(".section-center");
const sectionBtn = document.querySelector(".btn-container");
const btnsidebar = document.querySelectorAll(".btn-js");
const sidebar = document.querySelector(".btns-section");
const shown = document.querySelector(".btns-show");
const navbar = document.querySelector(".nav-full");
window.addEventListener("scroll", () => {
  let navbarHeight = navbar.getBoundingClientRect().height;
  if (window.pageYOffset > navbarHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});
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
      <ul class="social-icons">
          ${item.socialMedia}
        </ul>
    </article>`
    )
    .join("");
  // let iconTimes = `<i class="fas fa-bars"></i>`
  sectionCenter.innerHTML = `${info}`;
}
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
      (job) => `<button type="button" class="filter-btn" data-id=${job} id="${job}">
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
}
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
}
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});
// const scrollLinks = document.querySelectorAll(".filter-btn");
// scrollLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     // prevent default
//     e.preventDefault();
//     // navigate to specific spot
//     const id = e.currentTarget.getAttribute("id").slice(1);

//     const fixedNav = navbar.classList.contains("fixed-nav");
//     let position = id.offsetTop - fixedNav;
//     if (!fixedNav) {
//       position = position - fixedNav;
//     }
//     if (navHeight > 82) {
//       position = position;
//     }
//     window.scrollTo({
//       left: 0,
//       top: position,
//     });
//     // close
//     sidebar.classList.toggle(shown);
//   });
// });