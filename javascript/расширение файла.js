'use strict';

// проверить расширение файлы аудио или изображение

String.prototype.isAudio= function(){
  let regAudio = /^(mp3|flac|alac|aac)+$/;
  let reg = /^\w\S\D+$/gi;
  let checked = this.split('.');
  if (reg.test(checked[0]) && regAudio.test(checked[1]) && this.indexOf(' ') == -1) {return true} else {return false}
};
String.prototype.isImage= function(){
  let checked = this.split('.');
  let reg = /^\w\S\D+$/gi;
  let regImg = /^(jpg|jpeg|png|bmp|gif)+$/;
  if (reg.test(checked[0]) && regImg.test(checked[1]) && this.indexOf(' ') == -1) {return true} else {return false}
};

// String.prototype.isAudio = function() {
//   return /^[a-zA-Z]+\.(mp3|flac|al?ac)$/.test(this)
// }

// String.prototype.isImage = function() {
//   return /^[a-zA-Z]+\.(jpe?g|png|bmp|gif)$/.test(this)
// }