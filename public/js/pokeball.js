$(document).ready(() => {
  $(".pokeball").on("click", () => {
    console.log("i was clicked");
    window.location.href = "../login.html";
  });
});
