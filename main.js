// onload = () => {
//     const c = setTimeout(() => {
//       document.body.classList.remove("not-loaded");
//       clearTimeout(c);
//     }, 1000);
//   };


function showNotLoadedAndPlayAudio() {
  // Show not-loaded class after 1 second
  // const timeoutId = setTimeout(() => {
    document.querySelector('.not-loaded').classList.remove("not-loaded");
    // clearTimeout(timeoutId);
  // }, 1000);

  // Play audio in a loop
  const audio = document.getElementById("myAudio");
  audio.loop = true; // Set the loop attribute to true
  audio.play();
}
