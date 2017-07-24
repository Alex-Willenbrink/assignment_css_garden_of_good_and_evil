function parseCookie(cookie) {
  let parsed = decodeURIComponent(document.cookie);
  return JSON.parse(parsed.split("=")[1].substring(2));
}

let parsed = parseCookie(document.cookie);

let { goodOrEvil, favFood, favColor, sliderVal } = parsed;
let insanityLevel = parseInt(sliderVal);

let fontChanger = (insanityLevel) => {
  let tags = ["p", "h2", "h1", "span", "label"];
  let fontSize;

  tags.forEach((tag) => {
    fontSize = parseInt($(tag).css("font-size"));

    let min = fontSize / (insanityLevel / 2);
    let max = fontSize * (insanityLevel / 2);

    $(tag).css("font-size", Math.floor(Math.random() * ((max - min - 1) + min)));
  })
};

function findColor(favColor, goodOrEvil) {
  let color = [255, 255, 255];
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
}

$(document).ready(() => {
  findColor(favColor, goodOrEvil);

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

  fontChanger(insanityLevel);
});
