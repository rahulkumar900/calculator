const a = [
  "",
  "one ",
  "two ",
  "three ",
  "four ",
  "five ",
  "six ",
  "seven ",
  "eight ",
  "nine ",
  "ten ",
  "eleven ",
  "twelve ",
  "thirteen ",
  "fourteen ",
  "fifteen ",
  "sixteen ",
  "seventeen ",
  "eighteen ",
  "nineteen ",
];
const b = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

// Define regular expression

const regex = /^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/; // 00,00,00,0,00
const regexI = /^(\d{3})(\d{3})(\d{1})(\d{2})$/;
// 000,000,0,00

const getLT20 = (n) => a[Number(n)];
const getGT20 = (n) => b[n[0]] + " " + a[n[1]];
const getGT100 = (n) => {
  let str = "";
  if (!n || n.length < 2) return "";

  const [, n1, n2] = n.match(/^(\d{1})(\d{2})$/);

  str += n1 != 0 ? getLT20(n1) + " hundred " : "";
  str += n2 != 0 ? getLT20(n2) || getGT20(n2) : "";
  return str.trim();
};

function numWords(input) {
  const num = Number(input);

  if (isNaN(num)) return "";
  if (num === 0) return "zero";

  const numStr = num.toString();

  if (numStr.length > 9) {
    throw new Error("overflow"); // doesnot support converting more than 9 digits
  }

  const [, n1, n2, n3, n4, n5] = ("000000000" + numStr).substr(-9).match(regex);

  // indian formatting

  let str = "";
  str += n1 != 0 ? (getLT20(n1) || getGT20(n1)) + "crore " : "";
  str += n2 != 0 ? (getLT20(n2) || getGT20(n2)) + "lacks " : "";
  str += n3 != 0 ? (getLT20(n3) || getGT20(n3)) + "thousand " : "";
  str += n4 != 0 ? getLT20(n4) + "hundred " : "";
  str += n5 != 0 && str != "" ? "and " : "";
  str += n5 != 0 ? getLT20(n5) || getGT20(n5) : "";

  // Global formatting

  const [, n1G, n2G, n3G, n4G, n5G] = ("000000000" + numStr)
    .substr(-9)
    .match(regexI);
  console.log([, n1G, n2G, n3G, n4G]);
  let text = "";
  text += n1G != 0 ? getGT100(n1G) + " million " : "";
  text += n2G != 0 ? getGT100(n2G) + " thousand " : "";
  text += n3G != 0 ? getLT20(n3G) + " hundred " : "";
  text += n4G != 0 && text != "" ? "and " : "";
  text += n4G != 0 ? getLT20(n4G) || getGT20(n4G) : "";

  return [str.trim(), text.trim()];
}

export default numWords;
