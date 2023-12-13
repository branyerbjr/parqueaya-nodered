module.exports = {
    // Carga configuraciones del entorno
    functionGlobalContext: {
      // Agrega objetos globales aquí según sea necesario
    },
    logging: {
      console: {
        level: "info",
        metrics: false,
        audit: false,
      },
    },
    editorTheme: {
      projects: {
        enabled: false,
      },
    },
    // Configuración de autenticación básica
    adminAuth: {
      type: "credentials",
      users: [
        {
          username: "admin",
          password: "$2a$08$e6pL2IgFtMzMUj3Ps0uMq.zldRbI3myEJYkm0zCJEUU.XvqJ.NkaC",
          permissions: "*",
        },
      ],
    },
    // Configuración del editor
    editorTheme: {
      page: {
        title: "Node-RED",
      },
      header: {
        title: "Node-RED",
      },
    },
    // Configuración del servidor
    httpNodeAuth: { user: "user", pass: "$2a$08$e6pL2IgFtMzMUj3Ps0uMq.zldRbI3myEJYkm0zCJEUU.XvqJ.NkaC" },
    httpStaticAuth: { user: "user", pass: "$2a$08$e6pL2IgFtMzMUj3Ps0uMq.zldRbI3myEJYkm0zCJEUU.XvqJ.NkaC" },
    httpAdminAuth: { user: "user", pass: "$2a$08$e6pL2IgFtMzMUj3Ps0uMq.zldRbI3myEJYkm0zCJEUU.XvqJ.NkaC" },
    // Configuración de HTTPS
    https: {
      key: null,
      cert: null,
      rejectUnauthorized: true,
    },
  };
  