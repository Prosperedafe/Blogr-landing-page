const links = document.getElementById("links");
const openLink = document.getElementById("arrow-open");

openLink.addEventListener("click", () => {
  openLink == true;

  if (openLink == true) {
    links.style.transform = "scale(1)";
    openLink.style.rotate = "180deg";
  } else {
    links.style.transform = "scale(0)";
    openLink.style.rotate = "0deg";
  }
});
