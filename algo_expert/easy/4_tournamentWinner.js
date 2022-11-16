function tournamentWinner(competitions, results) {
    // Write your code here.
    const teams = new Map();
    let winner = ''
    let tournamentWinnerPoints = 0;
    const HOME_TEAM_IDX = 0;
    const FOREIGN_TEAM_IDX = 1;

    for (let idx in results) {
        let roundResult = results[idx];
        let roundWinner = !roundResult ? competitions[idx][FOREIGN_TEAM_IDX] : competitions[idx][HOME_TEAM_IDX];
        if (teams.has(roundWinner)) {
            teams.set(roundWinner, teams.get(roundWinner) + 3);
        } else {
            teams.set(roundWinner, 3);
        }
        if (teams.get(roundWinner) > tournamentWinnerPoints) {
            winner = roundWinner;
            tournamentWinnerPoints = teams.get(roundWinner);
        }
    }

    return winner;
}

// console.log(tournamentWinner(
//     [
//         ['a0', 'b0'],
//     ]
//     ,
//     [0]
// ))

console.log(tournamentWinner(
    [
        ["HTML", "C#"],
        ["C#", "Python"],
        ["Python", "HTML"]
    ],
    [0, 0, 1]
    ))