@echo off
chcp 65001 >nul
echo ==========================================
echo   小学英语单词学习系统 - Vercel部署脚本
echo ==========================================
echo.

:: 检查是否安装了vercel
vercel --version >nul 2>&1
if errorlevel 1 (
    echo [提示] 正在安装Vercel CLI...
    npm install -g vercel
    if errorlevel 1 (
        echo [错误] 安装失败，请确保已安装Node.js
        echo 访问 https://nodejs.org 下载安装Node.js
        pause
        exit /b 1
    )
)

echo [1/3] Vercel CLI已就绪
echo.
echo [2/3] 开始部署...
echo.

:: 执行部署
vercel --prod

if errorlevel 1 (
    echo.
    echo [错误] 部署失败
    echo 请检查网络连接或登录状态
    echo 运行 'vercel login' 登录您的账号
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   部署完成！
echo ==========================================
echo.
echo 您的网站已上线，可以通过上方链接访问
echo.
pause
