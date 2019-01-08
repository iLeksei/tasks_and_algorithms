function findChildren(dancingBrigade){
  dancingBrigade = dancingBrigade.toLowerCase().split('').sort();
  dancingBrigade = dancingBrigade.map((item, i ,arr) => {
    if (item !== arr[i-1]) {
      return item.toUpperCase();
    } else {
      return item;
    }
  });
  return dancingBrigade.join('');
};

// function findChildren(dancingBrigade){
//   return dancingBrigade.split("")
//                        .sort((a,b)=>a.localeCompare(b,"kf",{caseFirst:"upper"}))
//                        .join("");
// };

findChildren("beeeEBb"); //"BbbEeee"
//findChildren("uwwWUueEe"); //"EeeUuuWww"