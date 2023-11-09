//
//     One of the most efficient ways to run a factory is to use an assembly line,
//     with multiple stations performing different assembling steps simultaneously
//     in order to save time. But an assembly line is only as fast as its slowest
//     station/step; for example, if an assembly line has 100 different steps
//     performed by 100 different stations, with 99 steps taking 1 minute each to
//     complete and 1 step taking 1 hour to complete, then the entire assembly line
//     is dramatically slowed down by the 1-hour-long step.
//
//     Write a function that takes in a non-empty array of positive integers
//     stepDurations and a positive integer numStations.
//     The input array of integers represents the times that the various steps in
//     an assembly process take, and the input integer represents the number of
//     stations that this assembly process has access to. For this particular
//     assembly process, a single station can perform multiple steps, so long as
//     these steps are performed in order, meaning that a single station can
//     perform multiple steps whose times appear consecutively in the
//     stepDurations array. Your function should return the longest
//     duration of a single station in the assembly line after optimizing the
//     assembly line (i.e., minimizing its slowest station/step).
//
// You can assume that there will never be more stations than steps.
// Sample Input
// stepDurations = [15, 15, 30, 30, 45]
// numStations = 3
// Sample Output
// 60  // Station 1 does steps 0 and 1. Station 2 does steps 2 and 3. Station 3 does step 4.
//


function optimalAssemblyLine(stepDurations, numStations) {
    // Write your code here.
    return -1;
}