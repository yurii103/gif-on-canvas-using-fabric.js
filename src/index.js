import { fabric } from "fabric";
import { fabricGif } from "./fabricGif";
const canvas = new fabric.Canvas("canvas");
canvas.setDimensions({
  width: window.innerWidth,
  height: window.innerHeight,
});

async function init() {

  const gif1 = await fabricGif("./loader.gif");
  gif1.set({ top: 50, left: 50 });
  canvas.add(gif1);

  const gif3 = await fabricGif(
    "https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif",
    200,
    200
  );
  gif3.set({ top: 100, left: 50 });
  canvas.add(gif3);

  fabric.util.requestAnimFrame(function render() {
    canvas.renderAll();
    fabric.util.requestAnimFrame(render);
  });
}

init();
document.addEventListener('DOMContentLoaded', () => {
  const gifFileInput = document.getElementById('gifFileInput');

  gifFileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadAndConvert(file);
    }
  });
});

async function uploadAndConvert(file) {
  const result = await fabricGif(file, 150, 150);
  result.set({ top: 350, left: 200 });
  canvas.add(result);
  fabric.util.requestAnimFrame(function render() {
    canvas.renderAll();
    fabric.util.requestAnimFrame(render);
  });
}