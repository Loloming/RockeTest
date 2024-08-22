# Prueba Técnica Rocket Code

## Iniciar back-end y front-end

Para iniciar el tanto el back-end como front-end de la app, se debe abrir en la terminal los directorios root de client y de server:
```
/client
/server
```
Ahora hay que ejecutar el siguiente comando para instalar todas las dependencias que el proyecto necesita para funcionar. Hay que ejecutar el comando tanto en /client como en /server. 
```bash
npm install
```
Posteriormente hay que ejecutar el siguiente comando para inicializar ambas partes de la apliación, en ambos directorios nuevamente:
```bash
npm run dev
```

## Utilizar la aplicación

El servidor debería estar mostrando el siguiente mensaje:
```
server is now listening on http://localhost:3002/
```

Para visualizar el front-end se puede tocar ctrl+click en la URL que sale en la terminal de la ruta /client al iniciar el proyecto
```bash
➜ Local:   http://localhost:5173/
```
Al completar el chat-formulario y presionar el botón de iniciar, los datos del usuario se guardarán en una variable de sesión con el key "session". Se puede ver al inspeccionar la página (se puede usar la tecla f12), en la pestaña "Aplicación".

Para ver los usuarios guardados dentro de la base de datos, se puede ir a la siguiente URL:
```
http://localhost:3002/users
```