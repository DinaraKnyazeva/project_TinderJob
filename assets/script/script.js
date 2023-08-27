document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.querySelector(".swiper-wrapper");
  const jsonTest = [
    {
      id: 1,
      username: "john_doe",
      password: "mysecretpassword",
      name: "John Doe",
      role: "user",
      skills: "Java, Spring Boot, Hibernate",
    },
    {
      id: 2,
      username: "john_ggg",
      password: "mysecretpassword",
      name: "John Doe",
      role: "user",
      skills: "Java, Spring Boot, Hibernate",
    },
    {
      id: 3,
      username: "john_prpr",
      password: "mysecretpassword",
      name: "John Doe",
      role: "user",
      skills: "Java, Spring Boot, Hibernate",
    },
    {
      id: 4,
      username: "john_pcc'l",
      password: "mysecretpassword",
      name: "John Doe",
      role: "user",
      skills: "Java, Spring Boot, Hibernate",
    },
    {
      id: 5,
      username: "john_pkk;sx",
      password: "mysecretpassword",
      name: "John Doe",
      role: "user",
      skills: "Java, Spring Boot, Hibernate",
    },
  ];

  for (let item of jsonTest) {
    const cardSlide = document.createElement("div");
    cardSlide.classList.add("swiper-slide");
    cardSlide.innerHTML = `
    <div class="cards">
        <div class="cards__container">
          <div class="cards__container-img">
            <img
              class="cards__user-img"
              src="https://amiel.club/uploads/posts/2022-03/1647722251_1-amiel-club-p-krasivie-i-neobichnie-kartinki-1.jpg"
              alt="user img"
            />
          </div>
          <div class="cards__container-text">
            <p class="cards__name">${item.username}</p>
            <p class="cards__skills">Skills: ${item.skills}</p>
          </div>
          <div class="cards__icon-container">
            <button class="cards__icon-btn red">
              <img
                src="assets/icons/trash.svg"
                class="cards__icon"
                alt="delite"
              />
            </button>
            <button class="cards__icon-btn white">
              <img src="assets/icons/fire.svg" class="cards__icon" alt="fire" />
            </button>
            <button class="cards__icon-btn violet">
              <img
                src="assets/icons/heart.svg"
                class="cards__icon"
                alt="heart"
              />
            </button>
          </div>
        </div>
      </div>
      `;
    slideContainer.appendChild(cardSlide);

    new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
});
