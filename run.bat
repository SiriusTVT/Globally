@echo off
echo Iniciando el servidor de Vite...
start cmd /k "cd /d D:\Dis_Interfaces\Red Social\vite-project && npm run dev"

echo Iniciando el servidor de LibreTranslate...
start cmd /k "cd /d D:\Dis_Interfaces\Red Social\vite-project\src\Traductor\LibreTranslate && py -3.8 main.py --disable-web-ui"

pause