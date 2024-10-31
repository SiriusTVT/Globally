@echo off
echo Verificando si Python 3.8 está instalado...

:: Comprueba si Python 3.8 está instalado
py -3.8 --version >nul 2>&1
if errorlevel 1 (
    echo Python 3.8 no está instalado. Descargando e instalando...
    :: Descarga Python 3.8 si no está instalado
    curl -o python-3.8.10.exe https://www.python.org/ftp/python/3.8.10/python-3.8.10-amd64.exe
    start /wait python-3.8.10.exe /quiet InstallAllUsers=1 PrependPath=1
    echo Python 3.8 instalado correctamente.
) else (
    echo Python 3.8 ya está instalado, omitiendo instalación.
)

:: Verifica si pip está instalado para Python 3.8
echo Verificando si pip está instalado...
py -3.8 -m pip --version >nul 2>&1
if errorlevel 1 (
    echo pip no está instalado. Instalando pip...
    :: Descarga get-pip.py
    curl -o get-pip.py https://bootstrap.pypa.io/get-pip.py
    :: Instala pip
    py -3.8 get-pip.py
    :: Limpia el archivo temporal
    del get-pip.py
    echo pip instalado correctamente.
) else (
    echo pip ya está instalado, omitiendo instalación.
)

echo Instalando los requerimientos previos de LibreTranslate...
py -3.8 -m pip install libretranslate

cd src\\Traductor

echo Verificando si ya está descomprimido...
:: Verifica si existe la carpeta descomprimida (ajusta el nombre de la carpeta si es diferente)
if not exist LibreTranslate\ (
    echo Descomprimiendo archivo .rar...
    "C:\\Program Files\\WinRAR\\WinRAR.exe" x LibreTranslate.rar . -y
) else (
    echo Los archivos ya han sido descomprimidos, omitiendo descompresión.
)

cd LibreTranslate

echo Iniciando el servidor de LibreTranslate...
start cmd /k "py -3.8 main.py --disable-web-ui"

exit  :: Cierra la ventana de la terminal después de iniciar el servidor

:: Fin del archivo