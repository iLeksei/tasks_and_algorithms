'use strict';

// убрать wub из строки

function songDecoder(song){
  // let reg = /WUB/gi
  // song.replace(reg, ' ');
  song = song.split('WUB').filter((a) => {return a != '' && a != ' '}).join(" ");
  console.log(song);
};

songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB");

// return song.replace(/(WUB)+/g," ").trim()