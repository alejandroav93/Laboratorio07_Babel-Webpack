"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imagecatch = imagecatch;

function imagecatch(container2) {
  let figure = document.createElement('figure');
  figure.id = 'figure';
  figure.className = 'figure';
  container2.appendChild(figure);
  let video = document.createElement('video');
  video.id = 'video';
  video.width = 540;
  video.height = 320;
  video.controls = true;
  let videosrc = document.createElement('source');
  videosrc.src = '../source/Shock_3.mp4';
  videosrc.type = 'video/mp4';
  video.appendChild(videosrc);
  container2.appendChild(video);
  return container2;
}