
let states_needed = new Set(["aa", "bb", "cc", "dd", "ee", "ff"]);

const stations = {
    A: new Set(["aa", "bb"]),
    B: new Set(["bb", "cc"]),
    C: new Set(["dd", "cc", 'ee', "ff"]),
    // D: new Set(["ee", "ff"]),
};

// use Greedy-algorithm, because there is a set covering problem.
const find_states = () => {
    const result_stations = new Set();

    while(states_needed.size) {
        let bestStation = null
        let covered_states = new Set();
        for (const station in stations) {
            const current_states = stations[station];
            console.log(station)
            const current_covered = new Set([...states_needed].filter( x => current_states.has(x)));
            console.log(current_covered)
            if (current_covered.size > covered_states.size) {
                covered_states = current_covered;
                bestStation = station;
            }
        }

        states_needed = new Set([...states_needed].filter( x => !covered_states.has(x)) )
        result_stations.add(bestStation);
    }
    return result_stations;
};

let result = find_states();
console.log(result)