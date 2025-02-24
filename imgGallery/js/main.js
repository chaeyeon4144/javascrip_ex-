window.addEventListener("load", function () {
  const displayImg = this.document.querySelector(".display-img");
  const thumbBar = this.document.querySelector(".thumb-bar");
  const btn = this.document.querySelector(".dark");
  const overlay = this.document.querySelector(".overlay");
  const images = [`pic1.jpg`, `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
  const alt = {
    "pic1.jpg": "Closeup of a human eye",
    "pic1.jpg": "Closeup of a human eye",
    "pic2.jpg": "Rock that looks like a wave",
    "pic3.jpg": "Purple and white pansies",
    "pic4.jpg": "Section of wall from a pharoah's tomb",
    "pic5.jpg": "Large moth on a leaf",
  };
  //이미지 변경
  images.forEach((image) => {
    //console.log(images);
    const newImage = this.document.createElement("img");
    //console.log(newImage);
    newImage.setAttribute("src", `../images/${image}`);
    newImage.setAttribute("alt", `${alt[image]}`);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", function (e) {
      //console.log(e.target);

      displayImg.src = e.target.src;
      displayImg.alt = e.target.alt;
      console.log(e.target.alt);
    });
  });
  //다크 모드 변경
  btn.addEventListener("click", function () {
    const btnClass = btn.getAttribute("class");
    if (btnClass === "dark") {
      btn.setAttribute("class", "light");
      btn.textContent = "lighten";
      overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
      btn.setAttribute("class", "dark");
      btn.textContent = "darken";
      overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
  });
});
