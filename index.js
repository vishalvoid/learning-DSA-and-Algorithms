const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// DSA topics and code snippets
const dsaTopics = [
  {
    topic: "Array Operations",
    content: [
      "// Binary Search Implementation\nfunction binarySearch(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}",
      "// Two Sum Problem\nfunction twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement), i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}",
      "// Kadane's Algorithm - Maximum Subarray\nfunction maxSubArray(nums) {\n  let maxSoFar = nums[0];\n  let maxEndingHere = nums[0];\n  \n  for (let i = 1; i < nums.length; i++) {\n    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);\n    maxSoFar = Math.max(maxSoFar, maxEndingHere);\n  }\n  \n  return maxSoFar;\n}",
      "// Dutch National Flag Algorithm\nfunction sortColors(nums) {\n  let low = 0, mid = 0, high = nums.length - 1;\n  \n  while (mid <= high) {\n    if (nums[mid] === 0) {\n      [nums[low], nums[mid]] = [nums[mid], nums[low]];\n      low++; mid++;\n    } else if (nums[mid] === 1) {\n      mid++;\n    } else {\n      [nums[mid], nums[high]] = [nums[high], nums[mid]];\n      high--;\n    }\n  }\n}"
    ]
  },
  {
    topic: "Linked List",
    content: [
      "// LinkedList Node Definition\nclass ListNode {\n  constructor(val, next = null) {\n    this.val = val;\n    this.next = next;\n  }\n}",
      "// Reverse Linked List\nfunction reverseList(head) {\n  let prev = null;\n  let current = head;\n  \n  while (current !== null) {\n    let next = current.next;\n    current.next = prev;\n    prev = current;\n    current = next;\n  }\n  \n  return prev;\n}",
      "// Detect Cycle in Linked List\nfunction hasCycle(head) {\n  let slow = head;\n  let fast = head;\n  \n  while (fast !== null && fast.next !== null) {\n    slow = slow.next;\n    fast = fast.next.next;\n    \n    if (slow === fast) {\n      return true;\n    }\n  }\n  \n  return false;\n}",
      "// Merge Two Sorted Lists\nfunction mergeTwoLists(l1, l2) {\n  const dummy = new ListNode(0);\n  let current = dummy;\n  \n  while (l1 !== null && l2 !== null) {\n    if (l1.val <= l2.val) {\n      current.next = l1;\n      l1 = l1.next;\n    } else {\n      current.next = l2;\n      l2 = l2.next;\n    }\n    current = current.next;\n  }\n  \n  current.next = l1 || l2;\n  return dummy.next;\n}"
    ]
  },
  {
    topic: "Tree Algorithms",
    content: [
      "// Binary Tree Node\nclass TreeNode {\n  constructor(val, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n  }\n}",
      "// Binary Tree Inorder Traversal\nfunction inorderTraversal(root) {\n  const result = [];\n  \n  function inorder(node) {\n    if (node !== null) {\n      inorder(node.left);\n      result.push(node.val);\n      inorder(node.right);\n    }\n  }\n  \n  inorder(root);\n  return result;\n}",
      "// Maximum Depth of Binary Tree\nfunction maxDepth(root) {\n  if (root === null) return 0;\n  \n  const leftDepth = maxDepth(root.left);\n  const rightDepth = maxDepth(root.right);\n  \n  return Math.max(leftDepth, rightDepth) + 1;\n}",
      "// Validate Binary Search Tree\nfunction isValidBST(root) {\n  function validate(node, min, max) {\n    if (node === null) return true;\n    \n    if (node.val <= min || node.val >= max) {\n      return false;\n    }\n    \n    return validate(node.left, min, node.val) && \n           validate(node.right, node.val, max);\n  }\n  \n  return validate(root, -Infinity, Infinity);\n}"
    ]
  },
  {
    topic: "Dynamic Programming",
    content: [
      "// Fibonacci with Memoization\nfunction fibonacci(n, memo = {}) {\n  if (n in memo) return memo[n];\n  if (n <= 2) return 1;\n  \n  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);\n  return memo[n];\n}",
      "// Longest Common Subsequence\nfunction longestCommonSubsequence(text1, text2) {\n  const m = text1.length, n = text2.length;\n  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));\n  \n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (text1[i - 1] === text2[j - 1]) {\n        dp[i][j] = dp[i - 1][j - 1] + 1;\n      } else {\n        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n      }\n    }\n  }\n  \n  return dp[m][n];\n}",
      "// 0/1 Knapsack Problem\nfunction knapsack(weights, values, capacity) {\n  const n = weights.length;\n  const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));\n  \n  for (let i = 1; i <= n; i++) {\n    for (let w = 1; w <= capacity; w++) {\n      if (weights[i - 1] <= w) {\n        dp[i][w] = Math.max(\n          values[i - 1] + dp[i - 1][w - weights[i - 1]],\n          dp[i - 1][w]\n        );\n      } else {\n        dp[i][w] = dp[i - 1][w];\n      }\n    }\n  }\n  \n  return dp[n][capacity];\n}",
      "// Edit Distance\nfunction editDistance(word1, word2) {\n  const m = word1.length, n = word2.length;\n  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));\n  \n  for (let i = 0; i <= m; i++) dp[i][0] = i;\n  for (let j = 0; j <= n; j++) dp[0][j] = j;\n  \n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (word1[i - 1] === word2[j - 1]) {\n        dp[i][j] = dp[i - 1][j - 1];\n      } else {\n        dp[i][j] = Math.min(\n          dp[i - 1][j] + 1,    // deletion\n          dp[i][j - 1] + 1,    // insertion\n          dp[i - 1][j - 1] + 1 // substitution\n        );\n      }\n    }\n  }\n  \n  return dp[m][n];\n}"
    ]
  },
  {
    topic: "Graph Algorithms",
    content: [
      "// Depth First Search\nfunction dfs(graph, start, visited = new Set()) {\n  visited.add(start);\n  console.log(start);\n  \n  for (const neighbor of graph[start] || []) {\n    if (!visited.has(neighbor)) {\n      dfs(graph, neighbor, visited);\n    }\n  }\n}",
      "// Breadth First Search\nfunction bfs(graph, start) {\n  const visited = new Set();\n  const queue = [start];\n  \n  visited.add(start);\n  \n  while (queue.length > 0) {\n    const node = queue.shift();\n    console.log(node);\n    \n    for (const neighbor of graph[node] || []) {\n      if (!visited.has(neighbor)) {\n        visited.add(neighbor);\n        queue.push(neighbor);\n      }\n    }\n  }\n}",
      "// Dijkstra's Algorithm\nfunction dijkstra(graph, start) {\n  const distances = {};\n  const visited = new Set();\n  const pq = [[0, start]];\n  \n  for (const node in graph) {\n    distances[node] = Infinity;\n  }\n  distances[start] = 0;\n  \n  while (pq.length > 0) {\n    pq.sort((a, b) => a[0] - b[0]);\n    const [currentDistance, currentNode] = pq.shift();\n    \n    if (visited.has(currentNode)) continue;\n    visited.add(currentNode);\n    \n    for (const [neighbor, weight] of graph[currentNode] || []) {\n      const distance = currentDistance + weight;\n      \n      if (distance < distances[neighbor]) {\n        distances[neighbor] = distance;\n        pq.push([distance, neighbor]);\n      }\n    }\n  }\n  \n  return distances;\n}",
      "// Topological Sort\nfunction topologicalSort(graph) {\n  const visited = new Set();\n  const stack = [];\n  \n  function dfsUtil(node) {\n    visited.add(node);\n    \n    for (const neighbor of graph[node] || []) {\n      if (!visited.has(neighbor)) {\n        dfsUtil(neighbor);\n      }\n    }\n    \n    stack.push(node);\n  }\n  \n  for (const node in graph) {\n    if (!visited.has(node)) {\n      dfsUtil(node);\n    }\n  }\n  \n  return stack.reverse();\n}"
    ]
  },
  {
    topic: "Sorting Algorithms",
    content: [
      "// Quick Sort\nfunction quickSort(arr, low = 0, high = arr.length - 1) {\n  if (low < high) {\n    const pi = partition(arr, low, high);\n    quickSort(arr, low, pi - 1);\n    quickSort(arr, pi + 1, high);\n  }\n  return arr;\n}\n\nfunction partition(arr, low, high) {\n  const pivot = arr[high];\n  let i = low - 1;\n  \n  for (let j = low; j < high; j++) {\n    if (arr[j] < pivot) {\n      i++;\n      [arr[i], arr[j]] = [arr[j], arr[i]];\n    }\n  }\n  \n  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];\n  return i + 1;\n}",
      "// Merge Sort\nfunction mergeSort(arr) {\n  if (arr.length <= 1) return arr;\n  \n  const mid = Math.floor(arr.length / 2);\n  const left = mergeSort(arr.slice(0, mid));\n  const right = mergeSort(arr.slice(mid));\n  \n  return merge(left, right);\n}\n\nfunction merge(left, right) {\n  const result = [];\n  let i = 0, j = 0;\n  \n  while (i < left.length && j < right.length) {\n    if (left[i] <= right[j]) {\n      result.push(left[i]);\n      i++;\n    } else {\n      result.push(right[j]);\n      j++;\n    }\n  }\n  \n  return result.concat(left.slice(i)).concat(right.slice(j));\n}",
      "// Heap Sort\nfunction heapSort(arr) {\n  buildMaxHeap(arr);\n  \n  for (let i = arr.length - 1; i > 0; i--) {\n    [arr[0], arr[i]] = [arr[i], arr[0]];\n    heapify(arr, 0, i);\n  }\n  \n  return arr;\n}\n\nfunction buildMaxHeap(arr) {\n  const n = arr.length;\n  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {\n    heapify(arr, i, n);\n  }\n}\n\nfunction heapify(arr, i, n) {\n  let largest = i;\n  const left = 2 * i + 1;\n  const right = 2 * i + 2;\n  \n  if (left < n && arr[left] > arr[largest]) {\n    largest = left;\n  }\n  \n  if (right < n && arr[right] > arr[largest]) {\n    largest = right;\n  }\n  \n  if (largest !== i) {\n    [arr[i], arr[largest]] = [arr[largest], arr[i]];\n    heapify(arr, largest, n);\n  }\n}",
      "// Counting Sort\nfunction countingSort(arr) {\n  const max = Math.max(...arr);\n  const count = new Array(max + 1).fill(0);\n  const output = new Array(arr.length);\n  \n  // Count occurrences\n  for (let i = 0; i < arr.length; i++) {\n    count[arr[i]]++;\n  }\n  \n  // Transform count array\n  for (let i = 1; i <= max; i++) {\n    count[i] += count[i - 1];\n  }\n  \n  // Build output array\n  for (let i = arr.length - 1; i >= 0; i--) {\n    output[count[arr[i]] - 1] = arr[i];\n    count[arr[i]]--;\n  }\n  \n  return output;\n}"
    ]
  }
];

// Commit messages templates
const commitMessages = [
  "Add {topic} implementation",
  "Implement {topic} solution",
  "Update {topic} algorithm",
  "Fix {topic} bug",
  "Optimize {topic} performance",
  "Refactor {topic} code",
  "Add comments to {topic}",
  "Improve {topic} efficiency",
  "Add test cases for {topic}",
  "Update {topic} documentation",
  "Clean up {topic} code",
  "Add edge case handling for {topic}",
  "Simplify {topic} logic",
  "Add error handling to {topic}",
  "Update {topic} variable names"
];

// Random number generator with weight
function getRandomCommitCount() {
  const rand = Math.random();
  if (rand < 0.7) {
    // 70% chance for 2-9 commits
    return Math.floor(Math.random() * 8) + 2;
  } else {
    // 30% chance for 10-15 commits
    return Math.floor(Math.random() * 6) + 10;
  }
}

// Get random DSA content
function getRandomDSAContent() {
  const topic = dsaTopics[Math.floor(Math.random() * dsaTopics.length)];
  const content = topic.content[Math.floor(Math.random() * topic.content.length)];
  return { topic: topic.topic, content };
}

// Get random commit message
function getRandomCommitMessage(topic) {
  const template = commitMessages[Math.floor(Math.random() * commitMessages.length)];
  return template.replace('{topic}', topic);
}

// Execute git command
function executeGitCommand(command) {
  try {
    const result = execSync(command, { cwd: __dirname, encoding: 'utf8' });
    console.log(`✓ ${command}`);
    return result;
  } catch (error) {
    console.error(`✗ ${command}`);
    console.error(error.message);
    return null;
  }
}

// Set git date for commit
function setGitDate(date) {
  const dateString = date.toISOString();
  process.env.GIT_AUTHOR_DATE = dateString;
  process.env.GIT_COMMITTER_DATE = dateString;
}

// Generate random time for a specific date
function getRandomTimeForDate(date) {
  const randomHour = Math.floor(Math.random() * 24);
  const randomMinute = Math.floor(Math.random() * 60);
  const randomSecond = Math.floor(Math.random() * 60);
  
  const newDate = new Date(date);
  newDate.setHours(randomHour, randomMinute, randomSecond, 0);
  return newDate;
}

// Main function to generate fake commits
async function generateFakeCommits() {
  console.log('🚀 Starting fake commit generation...');
  
  // Initialize git repository if not exists
  if (!fs.existsSync('.git')) {
    console.log('Initializing git repository...');
    executeGitCommand('git init');
    executeGitCommand('git config user.name "Your Name"');
    executeGitCommand('git config user.email "your.email@example.com"');
  }
  
  // Create DSA folder if not exists
  const dsaDir = path.join(__dirname, 'dsa');
  if (!fs.existsSync(dsaDir)) {
    fs.mkdirSync(dsaDir);
  }
  
  // Date range: July 14, 2024 to July 16, 2024 (within past year from July 17, 2025)
  const startDate = new Date('2024-07-14');
  const endDate = new Date('2024-07-16');
  
  let fileCounter = 1;
  
  for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    const commitCount = getRandomCommitCount();
    console.log(`\\n📅 ${date.toDateString()} - Generating ${commitCount} commits`);
    
    const commitsForDay = [];
    
    // Generate commits for the day
    for (let i = 0; i < commitCount; i++) {
      const { topic, content } = getRandomDSAContent();
      const commitMessage = getRandomCommitMessage(topic);
      const commitTime = getRandomTimeForDate(date);
      
      commitsForDay.push({
        topic,
        content,
        commitMessage,
        commitTime,
        fileName: `solution_${fileCounter}.js`
      });
      
      fileCounter++;
    }
    
    // Sort commits by time
    commitsForDay.sort((a, b) => a.commitTime - b.commitTime);
    
    // Create commits
    for (const commit of commitsForDay) {
      const filePath = path.join(dsaDir, commit.fileName);
      
      // Write content to file
      fs.writeFileSync(filePath, commit.content);
      
      // Set git date
      setGitDate(commit.commitTime);
      
      // Add and commit
      executeGitCommand(`git add "${filePath}"`);
      executeGitCommand(`git commit -m "${commit.commitMessage}"`);
      
      console.log(`  ✓ ${commit.commitTime.toLocaleTimeString()} - ${commit.commitMessage}`);
    }
    
    // Push to remote repository at the end of each day
    console.log(`\\n🚀 Pushing commits for ${date.toDateString()}...`);
    executeGitCommand('git push origin main');
  }
  
  console.log('\\n🎉 Fake commit generation completed!');
  console.log('📊 Your GitHub chart should now show activity for the specified dates.');
  console.log('\\n⚠️  Important: Make sure to:');
  console.log('1. Set up your remote repository: git remote add origin <your-repo-url>');
  console.log('2. Create main branch if needed: git branch -M main');
  console.log('3. Push to remote: git push -u origin main');
}

// Error handling
process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled promise rejection:', error);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught exception:', error);
  process.exit(1);
});

// Run the script
if (require.main === module) {
  generateFakeCommits().catch(console.error);
}

module.exports = { generateFakeCommits };
