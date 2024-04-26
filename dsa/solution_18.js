// Validate Binary Search Tree
function isValidBST(root) {
  function validate(node, min, max) {
    if (node === null) return true;
    
    if (node.val <= min || node.val >= max) {
      return false;
    }
    
    return validate(node.left, min, node.val) && 
           validate(node.right, node.val, max);
  }
  
  return validate(root, -Infinity, Infinity);
}