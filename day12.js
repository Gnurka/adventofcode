var input = `cpy 1 a
cpy 1 b
cpy 26 d
jnz c 2
jnz 1 5
cpy 7 c
inc d
dec c
jnz c -2
cpy a c
inc a
dec b
jnz b -2
cpy c b
dec d
jnz d -6
cpy 17 c
cpy 18 d
inc a
dec d
jnz d -2
dec c
jnz c -5`;

var test = `cpy 41 a
inc a
inc a
dec a
jnz a 2
dec a`;

function getValue(op) {
    return eval(op);
}

function setValue(op, value) {
    eval(op + "=" + value);
}

var a = 0, b = 0, c = 1, d = 0;
var lines = input.split("\n");

for (var r = 0; r < lines.length;) {
    var line = lines[r];
    var i = line.split(" ");
//    console.log(line + " a=" + a + ", b=" + b + ", c=" + c + ", d=" + d);

    if (i[0] == "cpy") {
        setValue(i[2], getValue(i[1]));
    } else if (i[0] == "inc") {
        setValue(i[1], getValue(i[1])+1);
    } else if (i[0] == "dec") {
        setValue(i[1], getValue(i[1]) - 1);
    }

    if (i[0] == "jnz" && getValue(i[1]) != 0) {
        r = r + getValue(i[2]);
    } else {
        r++;
    }
};

console.log(a);