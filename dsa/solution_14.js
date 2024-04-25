// Topological Sort
function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];
  
  function dfsUtil(node) {
    visited.add(node);
    
    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        dfsUtil(neighbor);
      }
    }
    
    stack.push(node);
  }
  
  for (const node in graph) {
    if (!visited.has(node)) {
      dfsUtil(node);
    }
  }
  
  return stack.reverse();
}