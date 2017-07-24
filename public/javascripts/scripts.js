console.log("Say this plz");

let notParsed = document.cookie;
let parsed = decodeURIComponent(document.cookie);
console.log(parsed);

if (parsed) {
}

parsed = JSON.parse(parsed.split("=")[1].substring(2));
console.log(parsed);

let { goodOrEvil, favFood, favColor } = parsed;

// default background is white
let color = [255, 255, 255];

$(document).ready(() => {
  if (favColor) {
    switch (favColor) {
      case "blue":
        color[0] = 0;
        color[1] = 0;
        break;
      case "green":
        color[0] = 0;
        color[2] = 0;
        break;
      case "red":
        color[1] = 0;
        color[2] = 0;
        break;
    }
  }

  if (goodOrEvil) {
    if (goodOrEvil === "evil") {
      color = color.map(ele => {
        return Math.floor(ele / 2);
      });
    }
  }
  $("body").css("background", `rgb(${color})`);

  $(".dropdown-menu a").click(function() {
    $("#selected").text($(this).text());
  });
});
