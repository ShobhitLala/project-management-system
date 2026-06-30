import swaggerJSDoc from "swagger-jsdoc";

const options = {
 definition: {
  openapi: "3.0.0",
  info: {
    title: "Project Management System API",
    version: "1.0.0",
    description:
      "REST API documentation for the Project Management System Backend",
  },
  servers: [
    {
      url: "http://localhost:5000/api/v1",
      description: "Development Server",
    },
    {
      url: "https://project-management-system-9z26.onrender.com/api/v1",
      description: "Production Server",
    },
  ],

  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },

  security: [
    {
      bearerAuth: [],
    },
  ],
},
  apis: ["./src/modules/**/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;