@echo off
echo Iniciando el servidor de Vite...
start cmd /k "npm run dev"

echo Instalando los requerimientos previos de LibreTranslate...
py -3.8 -m pip install libretranslate

cd src\\Traductor

echo Verificando si ya está descomprimido...
:: Verifica si existe la carpeta descomprimida (ajusta el nombre de la carpeta si es diferente)
if not exist LibreTranslate\ (
    echo Descomprimiendo archivo .rar...
    "C:\\Program Files\\WinRAR\\WinRAR.exe" x LibreTranslate.rar . -y
) else (
    echo Los archivos ya han sido descomprimidos, omitiendo descompresion.
)

cd LibreTranslate

echo Iniciando el servidor de LibreTranslate...
start cmd /k "py -3.8 main.py --disable-web-ui"

pause