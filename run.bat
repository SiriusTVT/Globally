@echo off
echo Iniciando el servidor de Vite...
start cmd /k "npm run dev"

echo Instalando los requerimientos previos de LibreTranslate...
cd src\\Traductor\\LibreTranslate
py -3.8 -m pip install libretranslate

echo Iniciando el servidor de LibreTranslate...
start cmd /k "py -3.8 main.py --disable-web-ui"

pause