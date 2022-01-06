const a = [[9, 10], [15, 16]];
const b = [[10, 11], [15, 17], [17, 18]];
// need to find common free time for meeting (1h) between 9am(9.00) and 6pm(18.00)

function removeIntermediateHours(map = new Map(), arr = []) {
  let i = arr[0] + 1;
  while (i < arr[arr.length - 1]) {
    map.delete(i);
    i++;
  }
}


function findTimeForMeeting(a = [], b = []) {
	let all_time = new Map();
	for (let i = 9, j = 0; j < 9; j++) {
    all_time.set(i, [i, i + 1]);
		i++;
	}
	console.table(all_time);

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    let a_curr = a[i] ? a[i] : undefined;
    let b_curr = b[i] ? b[i] : undefined;

    if (a_curr) {
      if (a_curr[0] + 1 === a_curr[1]) {
        all_time.delete(a_curr[0]);
      } else {
        removeIntermediateHours(all_time, a_curr);
      }
    }

    if (b_curr) {
      if (b_curr[0] + 1 === b_curr[1]) {
        all_time.delete(b_curr[0]);
      } else {
        removeIntermediateHours(all_time, b_curr);
      }
    }
  
  }
  console.table(all_time);

}



const result =  findTimeForMeeting(a, b); // expected = [[11,12], [12,13], [13,14], [14,15]]
