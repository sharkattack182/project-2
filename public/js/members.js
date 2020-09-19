$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  $.get("/api/pokemons").then(data => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      const element = data[i];

      const newPoke = $("<h2>");

      const newLink = $("<a>").text(element.name);
      newLink.attr("href", "/pokemons?id=" + element.id);

      const newImg = $("<img>");
      newImg.attr(
        "src",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
          element.id +
          ".png"
      );
      $(".imgs").append(newImg);
      newImg.attr("height", "70px");

      newPoke.append(newLink);
      $("#pokedex").append(newPoke);
      $("#pokedex").append(newImg);
    }
  });
});
