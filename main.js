window.onload = function () {
  let topBtn = document.getElementById("top_btn");
  console.log(topBtn);

  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  }

  const menuButton = document.querySelector(".menu_btn");
  const navigation = document.querySelector(".navigation");
  const navLinks = document.querySelectorAll(".navigation button a");
  const headerHeight = document.querySelector("header").offsetHeight;

  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("active");
    navigation.style.top = `${headerHeight}px`;
  });
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  });
};
