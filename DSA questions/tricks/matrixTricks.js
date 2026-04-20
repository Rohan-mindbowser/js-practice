// ============================================================
// MATRIX TRICKS
// ============================================================

// ================================
// 1. TRANSPOSE A MATRIX
// ================================
function transpose(matrix) {
  return matrix[0].map((_, colIdx) => matrix.map((row) => row[colIdx]));
}
console.log(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ]),
); // [[1,3,5],[2,4,6]]

// ================================
// 2. ROTATE MATRIX 90° CLOCKWISE
// ================================
// Step 1: Transpose, Step 2: Reverse each row
function rotateMatrix90(matrix) {
  const t = transpose(matrix);
  return t.map((row) => row.reverse());
}
console.log(
  rotateMatrix90([
    [1, 2],
    [3, 4],
  ]),
); // [[3,1],[4,2]]

// ================================
// 3. SPIRAL ORDER TRAVERSAL OF MATRIX
// ================================
function spiralOrder(matrix) {
  const result = [];
  let top = 0,
    bottom = matrix.length - 1;
  let left = 0,
    right = matrix[0].length - 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) result.push(matrix[top][i]);
    top++;
    for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
      left++;
    }
  }
  return result;
}
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
); // [1,2,3,6,9,8,7,4,5]

// ================================
// 4. 4-DIRECTIONAL & 8-DIRECTIONAL MOVEMENT (GRID)
// ================================
// Up, Down, Left, Right
const dir4 = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// Including diagonals
const dir8 = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

// Usage: for grid BFS/DFS
function isValid(r, c, rows, cols) {
  return r >= 0 && r < rows && c >= 0 && c < cols;
}
