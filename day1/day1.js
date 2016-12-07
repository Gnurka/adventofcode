function getPosString(pos) {
    return "x=" + pos[0] + ", y=" + pos[1];
}
/**
 * Created by gustav.darpo on 2016-12-06.
 */

$(document).ready(function () {
    var input = "R3, L5, R2, L2, R1, L3, R1, R3, L4, R3, L1, L1, R1, L3, R2, L3, L2, R1, R1, L1, R4, L1, L4, R3, L2, L2, R1, L1, R5, R4, R2, L5, L2, R5, R5, L2, R3, R1, R1, L3, R1, L4, L4, L190, L5, L2, R4, L5, R4, R5, L4, R1, R2, L5, R50, L2, R1, R73, R1, L2, R191, R2, L4, R1, L5, L5, R5, L3, L5, L4, R4, R5, L4, R4, R4, R5, L2, L5, R3, L4, L4, L5, R2, R2, R2, R4, L3, R4, R5, L3, R5, L2, R3, L1, R2, R2, L3, L1, R5, L3, L5, R2, R4, R1, L1, L5, R3, R2, L3, L4, L5, L1, R3, L5, L2, R2, L3, L4, L1, R1, R4, R2, R2, R4, R2, R2, L3, L3, L4, R4, L4, L4, R1, L4, L4, R1, L2, R5, R2, R3, R3, L2, L5, R3, L3, R5, L2, R3, R2, L4, L3, L1, R2, L2, L3, L5, R3, L1, L3, L4, L3";
    //var input = "R8, R4, R4, R8";
    var instructions = input.split(", ");

    console.log(instructions);

    var pos = [0, 0];
    var dir = 0;
    //var dist = 0;

    var dirs = [[0,1], [1,0], [0,-1], [-1,0]];

    var positions = new Set();
    instructions.every(function(i) {
        var turn = i[0];
        var dist = parseInt(i.substring(1));

        if (turn == "R") {
            dir = (dir+1) % 4;
        } else {
            if (dir == 0) {
                dir = 3;
            } else {
                dir = dir-1;
            }
        }

        for (var d = 0; d < dist; d++) {
            pos[0] += dirs[dir][0];
            pos[1] += dirs[dir][1];

            if (!positions.has(getPosString(pos))) {
                positions.add(getPosString(pos));
            } else {
                console.log("First duplicate pos found: " + getPosString(pos));
                return false;
            }
        }


        console.log(getPosString(pos));
        return true;
    });

    // Taxi distance
    console.log(Math.abs(pos[0]) + Math.abs(pos[1]));
});