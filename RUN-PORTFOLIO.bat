@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is required. Install Node.js 20.9 or newer, then run this file again.
  pause
  exit /b 1
)

if not exist "node_modules\.bin\next.cmd" (
  echo Project packages are missing. Open PowerShell in this folder and run: npm install
  pause
  exit /b 1
)

echo Starting Sayyad Ali's portfolio. Keep this window open while browsing.
echo Next.js will show the URL below. Press Ctrl+C here to stop the site.
echo.
npm run dev
pause
