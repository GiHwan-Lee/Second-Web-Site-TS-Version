const images: string[] = [
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
];

const randomImg: string = images[Math.floor(Math.random() * images.length)];

const bgImage: HTMLImageElement = document.createElement("img");
const container: HTMLElement | null = document.querySelector("#container");

if (!container) {
  throw new Error("Container element not found");
}

container.appendChild(bgImage);

bgImage.id = "background-img";

bgImage.src = `${randomImg}`;
