@echo off
echo 🚀 Setting up GitHub repository for fake commits...

set /p REPO_URL="📝 Please enter your GitHub repository URL (e.g., https://github.com/username/repo-name.git): "

if "%REPO_URL%"=="" (
    echo ❌ Repository URL is required!
    pause
    exit /b 1
)

echo 🔗 Adding remote origin...
git remote add origin %REPO_URL%

echo 🌿 Setting main branch...
git branch -M main

echo 📁 Adding initial files...
git add .
git commit -m "Initial commit: Add fake commits generator"

echo 🚀 Pushing initial commit...
git push -u origin main

echo ✅ Setup complete! Now you can run 'npm start' to generate fake commits.
pause
