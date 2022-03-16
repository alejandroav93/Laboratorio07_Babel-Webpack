"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imagecatch = imagecatch;

var _Shot_ = _interopRequireDefault(require("../source/Shot_2.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function imagecatch(container2) {
  let figure = document.createElement('figure');
  figure.id = 'figure';
  figure.className = 'figure';
  container2.appendChild(figure);
  let image = document.createElement('img');
  image.id = 'image';
  image.alt = "Wild Pikachu in a Pokéball";
  image.src = _Shot_.default;
  image.width = 540;
  image.height = 320;
  container2.appendChild(image);
  let caption = document.createElement('figcaption');
  caption.id = 'caption';
  caption.innerHTML = "Copyright: The Pokémon Company Inc./Game Freak Co., Ltd/ Nintendo Co., Ltd";
  container2.appendChild(caption);
  return container2;
}