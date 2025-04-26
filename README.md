# Fake Git Commits Generator

This project generates fake commits for your GitHub contribution chart using random Data Structures and Algorithms (DSA) content.

## Features

- Generates 2-15 commits per day (70% chance for <10 commits)
- Random DSA topics including:
  - Array Operations
  - Linked Lists
  - Tree Algorithms
  - Dynamic Programming
  - Graph Algorithms
  - Sorting Algorithms
- Realistic commit messages
- Random commit times throughout each day
- Automatic push to GitHub after each day

## Date Range

July 14, 2024 to July 16, 2024 (within past year from July 17, 2025)

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Git configuration:**
   ```bash
   git config user.name "Your Name"
   git config user.email "your.email@example.com"
   ```

3. **Create a new repository on GitHub** (if you haven't already)

4. **Add remote repository:**
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   ```

5. **Set main branch:**
   ```bash
   git branch -M main
   ```

## Usage

Run the script:
```bash
npm start
```

The script will:
1. Initialize a git repository (if not exists)
2. Create a `dsa` folder with JavaScript files
3. Generate random DSA code snippets
4. Create commits with realistic timestamps
5. Push to GitHub after each day

## Generated Files

The script creates files in the `dsa/` directory:
- `solution_1.js`
- `solution_2.js`
- `solution_3.js`
- ... and so on

Each file contains a different DSA algorithm or data structure implementation.

## Sample Commit Messages

- "Add Binary Search implementation"
- "Implement Linked List solution"
- "Update Dynamic Programming algorithm"
- "Fix Tree Algorithms bug"
- "Optimize Graph Algorithms performance"

## Important Notes

⚠️ **Disclaimer**: This tool is for educational purposes. Use responsibly and in accordance with GitHub's terms of service.

## Troubleshooting

If you encounter issues:

1. **Git not initialized**: The script will automatically initialize git
2. **Remote not set**: Add your remote repository URL
3. **Authentication issues**: Make sure you have proper Git credentials configured
4. **Push fails**: Ensure you have write access to the repository

## License

MIT License
