console.log("Say this plz");

let notParsed = document.cookie;

let parsed = decodeURIComponent(document.cookie);

parsed = JSON.parse(parsed.split("=")[1].substring(2));

let { goodOrEvil, favFood, favColor, sliderVal } = parsed;

let fontChanger = () => {
  let tags = ["p", "h2", "h1", "span", "label"];
};

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

  // Likes and Dislikes first
  let likes = [];
  let dislikes = [];
  let biographyEvil = `testevil`;
  let biographyGood = `test`;

  let goodResume = [
    "social worker",
    "elementary school teacher",
    "firefighter"
  ];
  let badResume = ["executioner", "hired goon", "mercenary"];

  if (favColor) {
    likes.push(favColor);
  }
  if (favFood) {
    likes.push(favFood);
  }
  if (goodOrEvil === "evil") {
    likes.push("evil");
    dislikes.push("good");
    $(".biography").text(biographyEvil);
    badResume.forEach(job => {
      $(".resume").append(`<li>${job}</li>`);
    });
  } else {
    likes.push("good");
    dislikes.push("evil");
    $(".biography").text(biographyGood);
    goodResume.forEach(job => {
      $(".resume").append(`<li>${job}</li>`);
    });
  }

  if (parseInt(sliderVal) > 5) {
    likes.push("chaos");
    dislikes.push("order");
  } else {
    likes.push("order");
    dislikes.push("chaos");
  }

  likes.forEach(like => {
    $(".likes").append(`<li>${like}</li>`);
  });

  dislikes.forEach(dislike => {
    $(".dislikes").append(`<li>${dislike}</li>`);
  });
});
