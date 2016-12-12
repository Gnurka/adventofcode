var polonium = 1, thulium = 2, promethium = 3, ruthenium = 4, cobalt = 5;

var initial = [0, [polonium, thulium, -thulium, promethium, ruthenium, -ruthenium, cobalt, -cobalt],
                [-polonium, -promethium], [], []];

console.log(initial);

function enumMoves(state) {

}

function isVictory(state) {

}

var queue = [];
queue.add(initial);

while (queue.length > 0) {
    var state = queue.pop();

    // Check for victory condition!
    if (isVictory(state)) {
        break;
    }

    var moves = enumMoves(state);

    moves.forEach(function (move) {
        // Detect if move has been visited!
        queue.add(move);
    });
}