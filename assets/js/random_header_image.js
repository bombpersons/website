function set_random_header_image(logo_text) {
  var images = new Array(
    "plant_bomb.gif",
    "spinning_bomb.gif",
    /*"exploding_bomb.gif",*/ // Too tall =(
    "explosion.gif",
    "explosion2.gif"
  );

  var randomNum = Math.floor(Math.random() * images.length);
  let img = new Image();
  console.log("Loading random image: " + images[randomNum]);

  img.onload = function() {
    console.log("Loaded random image: " + img.src);

    logo_text.style.backgroundImage = `url('${img.src}')`;
    logo_text.style.paddingLeft = `${img.width + 10}px`;
  };
  img.src = `/assets/images/header_images/${images[randomNum]}`;
}
