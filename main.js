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
};