const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const a = expr.split("");
  const arr = [];
  while (a.length) {
    arr.push(a.splice(0, 10));
  }
  const newArr = arr.map((i) => {
    const newStr = i.join("");
    const newStr2 = newStr.split("");
    if (newStr === "**********") {
      return " ";
    }
    const arr2 = [];
    while (newStr2.length) {
      arr2.push(newStr2.splice(0, 2));
    }
    const code = arr2
      .map((x) => {
        switch (+x.join("")) {
          case 10:
            return ".";
          case 11:
            return "-";
          default:
            return "";
        }
      })
      .join("");
    return MORSE_TABLE[code];
  });
  return newArr.join("");
}

module.exports = {
  decode,
};
