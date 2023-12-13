# Usa una imagen oficial de Node.js como base
FROM node:14

# Etiqueta de información del creador
LABEL maintainer="Tu Nombre <tu@email.com>"

# Directorio de trabajo en el contenedor
WORKDIR /usr/src/node-red

# Instala Node-RED
RUN npm install -g --unsafe-perm node-red

# Copia el archivo de configuración predeterminado
COPY settings.js /usr/src/node-red/settings.js

# Exponer el puerto en el que Node-RED va a escuchar
EXPOSE 1880

# Comando para ejecutar Node-RED cuando se inicia el contenedor
CMD ["node-red"]
