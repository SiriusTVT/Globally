@echo off
echo Instalando los requerimientos previos de LibreTranslate...
py -3.8 -m pip install libretranslate

cd src\\Traductor

echo Verificando si ya esta descomprimido...
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

exit  :: Cierra la ventana de la terminal después de iniciar el servidor

:: Fin del archivo