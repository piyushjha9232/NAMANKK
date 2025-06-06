
const numerologyMap = {
  A:1, B:2, C:3, D:4, E:5, F:8, G:3, H:5, I:1, J:1,
  K:2, L:3, M:4, N:5, O:7, P:8, Q:1, R:2, S:3, T:4,
  U:6, V:6, W:6, X:5, Y:1, Z:7
};

const meanings = {
  1: "Excellent",
  2: "Ok",
  3: "Very good",
  4: "X",
  5: "Excellent",
  6: "Excellent",
  7: "Ok for individual and good for company",
  8: "XX",
  9: "Avoid/Ok",
  10: "Very good",
  11: "X",
  12: "Ok",
  13: "X",
  14: "Avoid",
  15: "Good",
  16: "Ok for Individual and Good for Company",
  17: "Avoid/Ok",
  18: "XX",
  19: "Good",
  20: "OK",
  21: "Very Good",
  22: "XX",
  23: "Very Good",
  24: "Ok/Good",
  25: "Ok for Individual and Good for Company",
  26: "X",
  27: "Good",
  28: "X for Individual and Good for Company",
  29: "X",
  30: "Ok",
  31: "XX",
  32: "Good",
  33: "Very Good",
  34: "X",
  35: "XX",
  36: "OK",
  37: "Excellent",
  38: "XX",
  39: "Good",
  40: "XX",
  41: "Ok/Good",
  42: "Avoid",
  43: "XX for Individual and Good for Company",
  44: "XXX",
  45: "Ok/Good",
  46: "Ok/Good",
  47: "XX",
  48: "X",
  49: "XX",
  50: "Good",
  51: "Ok/Good",
  52: "XX",
  53: "Ok",
  54: "Avoid",
  55: "Ok/Good",
  56: "Avoid",
  57: "Good",
  58: "Ok",
  59: "Ok",
  60: "Ok",
  61: "Ok/Avoid",
  62: "OK",
  63: "Ok/Avoid",
  64: "Avoid/X",
  65: "Ok",
  66: "Good",
  67: "OK",
  68: "X",
  69: "Very Good",
  70: "Ok/Good",
  71: "Avoid/Ok",
  72: "Avoid",
  73: "Excellent",
  74: "Avoid",
  75: "X",
  76: "Avoid",
  77: "Avoid",
  78: "Avoid",
  79: "Ok",
  80: "XX",
  81: "Avoid",
  82: "X",
  83: "OK",
  84: "OK",
  85: "XX",
  86: "Avoid",
  87: "OK",
  88: "X",
  89: "XX",
  90: "Ok",
  91: "Very Good",
  92: "XX",
  93: "Very Good",
  94: "X",
  95: "OK",
  96: "Good",
  97: "X",
  98: "XX",
  99: "Avoid",
  100: "Very Good"
};


function calculateNamaankk() {
  const name = document.getElementById("nameInput").value.toUpperCase();
  let total = 0;
  for (let char of name) {
    if (numerologyMap[char]) {
      total += numerologyMap[char];
    }
  }

  let reduced = total;
  while (reduced > 100) {
    reduced = String(reduced).split('').reduce((a, b) => a + Number(b), 0);
  }

  const result = meanings[total] || meanings[reduced] || "Meaning not found";
  document.getElementById("output").innerHTML = `
    Total: ${total} <br>
    Reduced: ${reduced} <br>
    Result: ${result}
  `;
}
