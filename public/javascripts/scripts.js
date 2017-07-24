console.log("Say this plz");

let notParsed = document.cookie;

console.log(notParsed);
let parsed = decodeURIComponent(document.cookie);
console.log(parsed);


parsed = JSON.parse(parsed.split("=")[1].substring(2));
console.log(parsed);


let { goodOrEvil, favFood, favColor } = parsed;


// default background is white
let color = [255, 255, 255];

$(document).ready(() => {
  let insanityLevel = $("#slider").val();
  console.log(insanityLevel);

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

  // Likes and Dislikes first
  let likes = [];
  let dislikes = [];

  if(favColor) {
    likes.push(favColor);
  }
  if(favFood) {
    likes.push(favFood);
  }
  if(goodOrEvil === "evil") {
    likes.push("evil");
    dislikes.push("good");
  } else {
    likes.push("good");
    dislikes.push("evil");
  }

  if(insanityLevel > 5) {
    likes.push("chaos")
    dislike.push("order");
  } else {
    likes.push("order")
    dislike.push("chaos");
  }

  $(".likes").append("<")


});
