
const repeatString = function(word, ya) {
for (var i = 0; i < (ya-1); i++){
let string_new = "misc"
string_new = (word * ya);
console.log(string_new);
}
return string_new
};

repeatString('hey',3);
// Do not edit below this line
module.exports = repeatString;
