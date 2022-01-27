let friends = [
    "daniel",
    "jon",
    "devan",
    "catherine",
    "david"
];
let word = "lines ";

for (let i = 0; i < 4; i++) {
    let count = 99;
    while (count >1) {
        console.log(count + " " + word + "of code in the file,");
        console.log(count + " " + word + "of code,");
        console.log(friends[i] + " " + "strikes one out, clears it all out,");
        count = count - 1;
    }

    if (count == 1) {
        let word = "line ";
        console.log(count + " " + word + "of code in the file.");
    }

    console.log(friends[i] + " strikes one out, clears it all out,");
    console.log("No more lines of code int he file");
}