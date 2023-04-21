Martes 18/04/2023
Grabación: https://vimeo.com/819224566?share=copy#t=5024
Recuerden que su primer set de tareas son:
Hacer cuenta de AWS https://aws.amazon.com/es/
Hacer cuenta de Stripe https://stripe.com/en-mx
Levantar su Starter (Código)
Subir su starter a github y darle acceso a sus compañeros para hacer push
Empezar a hacer los esquemas marcados en el notion (Generación 21)


Jueves 21/04/2023
https://us02web.zoom.us/rec/share/PUPpf8h83XF4sZSnOdi_T7xB77GtEvwTX-My-6lrbb7wHcym0VIPKE6woE2N8JT7.229hL5g3WoBEshHV?startTime=1682038125000
Código de acceso: 5aB4QC
TAREA:

Avanzar con las rutas indicadas de applications
        Recuerden que se indica en el notion
        https://academlo.notion.site/Generaci-n-21-Endpoints-5aa62c31960547989f45a13b99e02820

Cuenta de Stripe y AWS también
# Auth Para Cuando Starter

Este proyecto es un ejemplo de autenticación usando sequelize como ORM y un esquema básico y sencillo como DB

Ya maneja handlers de error y otros utils para poder escalar de manera viable


## Installation

Para iniciar este proyecto solo asegurate de

Tener ___Node 18___

Se asume que se usa ___Postgres___ como motor de base de datos

Tener las variables marcadas en el __.env.example__ seteadas en el  __.env__

Si tienes dudas para que sirven las que son de __DATABASE_URI_ENV__, en el __notion Backend__ del proyecto existen explicaciones detalladas.

Una vez hecho eso, corre

```bash
  npm install
```

Y seguido de 

```bash
  npm run start
```
o

```bash
  npm run dev
```
Dependiendo si el entorno es de desarrollo o no

- - - -
## Docker

Por default, ya seteamos el Dockerfile y funciona


Si correrás el proyecto con ___docker-compose___ solo encargate de setear las variables en el ___.env___ indicadas en el ___.env.example___

Si se necesitas la ___base de datos___ que te damos de manera preterminada usando docker compose:

Tienes que indicar las variables que esta necesita para setearte la DB que están en el ___.env.db.docker.example___ al ___.env.db.docker___

Hecho eso, con el siguiente commando estaría listo:
```bash
  docker-compose up
```

Existe una explicación en el notion del proyecto que explica el ___Dockerfile___ y ___docker-compose.yml___