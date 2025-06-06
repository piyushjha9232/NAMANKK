
const numerologyMap = {
  A:1, B:2, C:3, D:4, E:5, F:8, G:3, H:5, I:1, J:1,
  K:2, L:3, M:4, N:5, O:7, P:8, Q:1, R:2, S:3, T:4,
  U:6, V:6, W:6, X:5, Y:1, Z:7
};

const meanings = {
  23: "Very Good",
  5: "Excellent",
  1: "Excellent",
  2: "Ok",
  3: "Very Good",
  4: "X",
  10: "Very Good"
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
