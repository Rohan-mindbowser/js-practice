// ============================================================
// GRAPH TRICKS
// ============================================================

// ================================
// 1. CONVERT ADJACENCY LIST ↔ MATRIX
// ================================
// Adjacency list to matrix (for n nodes, 0-indexed)
function adjListToMatrix(adjList, n) {
  const matrix = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let u = 0; u < n; u++) {
    for (const v of adjList[u]) {
      matrix[u][v] = 1;
    }
  }
  return matrix;
}

// Adjacency matrix to list
function adjMatrixToList(matrix) {
  return matrix.map((row, u) =>
    row.reduce((acc, val, v) => (val ? [...acc, v] : acc), []),
  );
}

// ================================
// 2. BFS TEMPLATE (GRAPH / TREE)
// ================================
function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  visited.add(start);
  while (queue.length > 0) {
    const node = queue.shift();
    // process node here
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

// ================================
// 3. DFS TEMPLATE (GRAPH / TREE)
// ================================
function dfs(graph, node, visited = new Set()) {
  visited.add(node);
  // process node here
  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

// ================================
// 4. TOPOLOGICAL SORT (KAHN'S BFS)
// ================================
// Works only on DAGs. Returns empty array if cycle exists.
function topologicalSort(n, edges) {
  const adj = Array.from({ length: n }, () => []);
  const inDegree = new Array(n).fill(0);
  for (const [u, v] of edges) {
    adj[u].push(v);
    inDegree[v]++;
  }
  const queue = [];
  for (let i = 0; i < n; i++) if (inDegree[i] === 0) queue.push(i);
  const order = [];
  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const neighbor of adj[node]) {
      if (--inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }
  return order.length === n ? order : []; // empty = cycle exists
}

// ================================
// 5. DISJOINT SET / UNION FIND
// ================================
// Useful for: connected components, cycle detection in undirected graphs, Kruskal's MST
class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }
  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]); // path compression
    return this.parent[x];
  }
  union(x, y) {
    const px = this.find(x),
      py = this.find(y);
    if (px === py) return false;
    if (this.rank[px] < this.rank[py]) this.parent[px] = py;
    else if (this.rank[px] > this.rank[py]) this.parent[py] = px;
    else {
      this.parent[py] = px;
      this.rank[px]++;
    }
    return true;
  }
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}
