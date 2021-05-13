function random_header_image() {
  var images = new Array(
    "/assets/images/header_images/rose.gif",
    "/assets/images/header_images/Blue_Dripping_Flowers.gif",
    "/assets/images/header_images/valentin.gif"
  );

  var randomNum = Math.floor(Math.random() * images.length);
  return images[randomNum];
}
