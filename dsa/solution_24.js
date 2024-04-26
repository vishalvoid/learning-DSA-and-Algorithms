// Binary Tree Inorder Traversal
function inorderTraversal(root) {
  const result = [];
  
  function inorder(node) {
    if (node !== null) {
      inorder(node.left);
      result.push(node.val);
      inorder(node.right);
    }
  }
  
  inorder(root);
  return result;
}