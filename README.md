# TallerServerSocket

Esta dividido en tres partes el server-side del front, el api rest y el servidor socket (puertos distintos).

## Configuraciones
- La configuración de la api se encuentra en el archivo config.js en la raiz y
- la configuración del frond esta ubicado en /FrondEndExampleRealTime/assets/config.js
- la configuracion del servidor socket se suministra en el archivo .env

## Ejecutar
- Paso 1 personalizar los archivos config del frond y del back (port, managerDB, userDB, nameDB, urlApi) y delservidor socket
- Paso 2 Instalar dependencias npm install en la carpeta raiz, en la carpeta server_socket y en la carpeta /FrondEndExampleRealTime
- Paso 3 Ejecutar todos los servidores npm run dev ó npm run start para el front y el api. Para el servidor socket node server.js en la carpeta socket_server.

