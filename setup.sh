#!/bin/bash

echo "🚀 Setting up GitHub repository for fake commits..."

# Prompt for GitHub repository URL
echo "📝 Please enter your GitHub repository URL (e.g., https://github.com/username/repo-name.git):"
read -r REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ Repository URL is required!"
    exit 1
fi

# Add remote origin
echo "🔗 Adding remote origin..."
git remote add origin "$REPO_URL"

# Set main branch
echo "🌿 Setting main branch..."
git branch -M main

# Add initial files
echo "📁 Adding initial files..."
git add .
git commit -m "Initial commit: Add fake commits generator"

# Push initial commit
echo "🚀 Pushing initial commit..."
git push -u origin main

echo "✅ Setup complete! Now you can run 'npm start' to generate fake commits."
