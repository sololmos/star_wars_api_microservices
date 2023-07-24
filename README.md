# Upskilling de Backend: "Star Wars"  Arquitectura de Microservicios y Bases de Datos NoSQL

### Descripción

¡Bienvenido/a al repositorio del proyecto StarWars_Microservices! Este proyecto fue realizado como parte de mi cursada en el Upskilling de Backend sobre Arquitectura de Microservicios y Bases de Datos NoSQL. A lo largo del curso, he explorado tecnologías relevantes para desarrollar aplicaciones escalables y eficientes en el mundo del Backend. La aplicación desarrollada consta de microservicios que proporcionan información sobre personajes, películas y planetas de la saga Star Wars.

### Tecnologías Utilizadas
Durante el desarrollo de este proyecto, utilicé las siguientes tecnologías:

- **Node.js**: Plataforma que permite ejecutar código JavaScript en el lado del servidor.
- **Express**: Framework para Node.js que facilita la creación de aplicaciones web y API.
- **MongoDB**: Base de datos NoSQL que ofrece una solución escalable para almacenar datos.
- **Docker**: Plataforma que permite la creación, implementación y ejecución de aplicaciones en contenedores.
- **Docker Compose**: Herramienta para definir y gestionar aplicaciones - - Docker multi-contenedor.
- **Google Cloud Platform (GCP)**: Proveedor de servicios en la nube donde se desplegará la aplicación.



### Endpoints de los Microservicios 🔗
##### Microservicio de Personajes de Star Wars:
 - [/characters](http://34.125.194.224:8000/characters): Obtiene una lista de todos los personajes de Star Wars.

 - [/characters/:id](http://34.125.194.224:8000/characters/1): Obtiene detalles sobre un personaje específico por su ID.

##### Microservicio de Películas de Star Wars:

- [/films](http://34.125.194.224:8000/films) : Obtiene una lista de todas las películas de Star Wars.
- [/films/:id](http://34.125.194.224:8000/films/1) : Obtiene detalles sobre una película específica por su ID.

##### Microservicio de Planetas de Star Wars:

- [/planets](http://34.125.194.224:8000/planets) : Obtiene una lista de todos los planetas de Star Wars.
- [/planets/:id](http://34.125.194.224:8000/planets/1) : Obtiene detalles sobre un planeta específico por su ID.

Cada microservicio está diseñado para funcionar de manera independiente y se comunica con los demás  por medio del microservicio **gateway** para compartir datos de manera eficiente y segura. Este ultimo microservicio es el encargado de centralizar las llamadas a los demás servicios a través de una URI que hace de entrada a esas peticiones.



### Conclusión
El proyecto realizado me proporcionó una base sólida para comprender y trabajar con arquitecturas de microservicios y bases de datos NoSQL en el desarrollo backend. El conocimiento adquirido en este curso permite a los desarrolladores diseñar, implementar y desplegar aplicaciones distribuidas y altamente escalables en un entorno moderno y dinámico.

### Contacto 📩
Si tenes alguna pregunta o inquietud sobre el proyecto, no dudes en ponerte en contacto conmigo en mi perfil de [LinkedIn](https://www.linkedin.com/in/sol-olmos-fullstackdev-industrialdesigner/). 

¡Gracias por tu interés en este proyecto! 



