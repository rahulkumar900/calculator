const numToWord = (function () {
  const a = [
    " ",
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
    " ",
    " ",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const groups = {
    0: " ",
    3: "thousand",
    6: "million",
    9: "billion",
    12: "trillion",
    15: "quadrillion",
    18: "quintillion",
    21: "Sextillion",
    24: "Septillion",
    27: "Octillion",
    30: "Nonillion",
    33: "Decillion",
    36: "Undecillion",
    39: "Duodecillion",
    42: "Tredecillion",
    45: "Quattuordecillion",
    48: "Quindecillion",
    51: "Sexdecillion",
    53: "Septendecillion",
    56: "Octodecillion",
  };

  const Igroups = {
    0: "",
    2: "hundred",
    4: "thousand",
    6: "lakh",
    8: "crore",
    10: "arab",
    12: "kharab",
    14: "neel",
    16: "padma",
    18: "śaṅkh",
    20: "Mahashankh",
    22: "ant",
    24: "madhya",
    26: "parardh",
  };

  const Ipoints = [
    " ",
    "Tenths",
    "Hundredths",
    "thousandth",
    "Ten thousandths",
    "Lakhths",
    "Ten Lakhths",
    "croreths",
    "ten croreths",
    "arabths",
    "ten arabths",
    "kharaths",
    "ten kharabths",
    "neelths",
    "ten neelths",
    "padmaths",
    "ten padmaths",
  ];

  const points = [
    " ",
    "Tenths",
    "Hundredths",
    "thousandth",
    "Ten thousandths",
    "One hundred thousandths",
    "millionth",
    "Ten millionths",
    "One hundred millionths",
    "billionth",
    "Ten billionths",
    "One hundred billionths",
    "trillionth",
    "Ten trillionths",
    "One hundred trillionths",
    "quadrillionth",
    "Ten quadrillionths",
    "One hundred quadrillionths",
    "quintillionth",
    "Ten quintillionths",
    "One hundred quintillionths",
    "sextillionth",
    "Ten sextillionths",
    "One hundred sextillionths",
    "septillionth",
    "Ten septillionths",
    "One hundred septillionths",
    "octillionth",
    "Ten octillionths",
    "One hundred octillionths",
    "nonillionth",
    "Ten nonillionths",
    "One hundred nonillionths",
    "decillionth",
    "Ten decillionths",
    "One hundred decillionths",
    "undecillionth",
    "Ten undecillionths",
    "One hundred undecillionths",
    "duodecillionth",
    "Ten duodecillionths",
    "One hundred duodecillionths",
    "tredecillionth",
    "Ten tredecillionths",
    "One hundred tredecillionths",
    "quattuordecillionth",
    "Ten quattuordecillionths",
    "One hundred quattuordecillionths",
    " quindecillionth",
    "Ten quindecillionths",
    "One hundred quindecillionths",
    "sexdecillionth",
    "Ten sexdecillionths",
    "One hundred sexdecillionths",
    "septendecillionth",
    "Ten septendecillionths",
    "One hundred septendecillionths",
    "octodecillionth",
    "Ten octodecillionths",
    "One hundred octodecillionths",
    "novemdecillionth",
    "Ten novemdecillionths",
    "One hundred novemdecillionths",
    "vigintillionth",
    "Ten vigintillionths",
    "One hundred vigintillionths",
    "trigintillionth",
    "Ten trigintillionths",
    "One hundred trigintillionths",
    "quadragintillionth",
    "Ten quadragintillionths",
    "One hundred quadragintillionths",
    "quinquagintillionth",
    "Ten quinquagintillionths",
    "One hundred quinquagintillionths",
    "sexagintillionth",
    "Ten sexagintillionths",
    "One hundred sexagintillionths",
    "septuagintillionth",
    "Ten septuagintillionths",
    "One hundred septuagintillionths",
    "octogintillionth",
    "Ten octogintillionths",
    "One hundred octogintillionths",
    "nonagintillionth",
    "Ten nonagintillionths",
    "One hundred nonagintillionths",
    "centillionth",
    "Ten centillionths",
    "One hundred centillionths",
    "googolth",
  ];

  const getLT20 = (n) => a[Number(n)]; // Read Three two digit number lessthan 20
  // const getGT20 = (n) => `${b[Number(n[0])]} - ${a[Number(n[1])]}`; // Read Three two digit number greaterthan 20
  const getGT20 = (n) => {
    const l = b[Number(n[0])];
    const r = a[Number(n[1])];
    console.log(`left ${l} right ${r}`);
    if (l.trim() && r.trim()) {
      return `${b[Number(n[0])]} - ${a[Number(n[1])]}`;
    }

    return l;
  };
  const getGT100 = (n, i) => {
    let str = "";
    if (!n || n.length < 2) return "";

    let and = i && i == 0 ? "and " : "";

    const [, n1, n2] = n.match(/^(\d{1})(\d{2})$/);

    str += n1 != 0 ? getLT20(n1) + `hundred ${and}` : "";
    str += n2 != 0 ? getLT20(n2) || getGT20(n2) : "";
    return str.trim();
  }; //Read three digit number

  // get chunk and conver it to three digit text
  const getPad = (num, pad) => {
    const chunk = num.toString();
    return chunk.length < pad ? chunk.padStart(pad, "0") : chunk;
  };

  // Reverse a string
  const reverse = (text) => {
    return text.toString().split("").reverse().join("");
  };

  function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  }

  /////////////////////GLOBAL WORD fORMATE///////////////////////////////////////////

  function GWF(arg,f) {
    console.log(arg);
    if (Number(arg) === 0) return "zero";
    if (!arg || isNaN(Number(arg))) return "Invalid Number";
    let sentense;
    let inputNumber = arg.toString();
    const isDot = inputNumber.indexOf(".");
    let [ln, rn] = inputNumber.split(".");
    if (Number(inputNumber) == 0) return "zero";
    // console.log(`Actual - ${inputNumber} -------------->`);
    const toWord = (la) => {
      if (!la) return "";
      const numStr = reverse(la);
      // console.log(`reverse - ${numStr} <-------------`);
      const chunks = []; //define an array of  chunk
      let word = []; // Defiem an array of word
      const length = numStr.length; // Length of input Number in text-format
      const chunkSize = 3; // Chunk Size
      for (let i = 0; i < length; i += chunkSize) {
        const chunk = getPad(reverse(numStr.slice(i, i + chunkSize)), 3);
        let w = getGT100(chunk).trim();
        console.log(w);
        if (w) {
          word.unshift(`${w} ${groups[i]} `);
        }
      }
      return word.join("").trim();
    };
    const lw = toWord(ln);
    
    const rw =
      rn && Number(rn) > 0
        ? `and ${toWord(rn)} ${points[rn.length].toLowerCase()}`

        : "";

    sentense = `${lw} ${rw}`;
    return sentense.trim();
  }
  ////////////////////////////////////////////////////////////////////

  //////////////////////INDIAN WORD fORMAT////////////////////////////
  function IWF(arg,f) {
    console.log(arg);
    if (Number(arg) === 0) return "zero";
    if (!arg || isNaN(Number(arg))) return "Invalid Number";
    let sentense;
    let inputNumber = arg.toString();
    const isDot = inputNumber.indexOf(".");
    let [ln, rn] = inputNumber.split(".");

    if (Number(inputNumber) == 0) return "zero";
    // console.log(`Actual - ${inputNumber} -------------->`);
    const toWord = (arg) => {
      if (!arg) return "";
      let numStr = reverse(arg);

      let hund = getPad(numStr.charAt(2), 2);

      numStr = setCharAt(numStr, 2, hund);

      console.log(numStr);

      // console.log(`reverse - ${numStr} <-------------`);
      const chunks = []; //define an array of  chunk
      let word = []; // Defiem an array of word
      const length = numStr.length; // Length of input Number in text-format
      const chunkSize = 2; // Chunk Size
      for (let i = 0; i < length; i += chunkSize) {
        let slice = numStr.slice(i, i + chunkSize);
        let chunk = getPad(i == 2 ? slice : reverse(slice), 2);
        chunk = Number(chunk).toString();

        let w = (getLT20(chunk) || getGT20(chunk)).trim();
        console.log(w.trim());
        if (w) {
          word.unshift(`${w} ${Igroups[i]} `);
        }
      }
      return word.join("").trim();
    };



    const lw = f === "currency" ?  toWord(ln) + "ruppy" : toWord(ln);
    const prefix = lw ? "and" : "";
    const rw =
      rn && Number(rn) > 0
        ? `${prefix} ${toWord(rn)} ${Ipoints[rn.length].toLowerCase()} ${ f === 'currency' ? "paisa" : '' }`
        : "";

    sentense = `${lw} ${rw}`;
    return sentense.trim();
  }

  return {
    GWF: (arg) => GWF(arg),
    IWF: (arg) => IWF(arg),
  };
})();

const { GWF, IWF } = numToWord;

// have to fix -
