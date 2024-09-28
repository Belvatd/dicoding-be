const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'], // Allow all origins
        headers: ['Accept', 'Content-Type', 'Authorization'], // Allow specific headers
        additionalHeaders: ['X-Requested-With'], // Allow any other custom headers
        credentials: true, // Allow credentials like cookies if needed
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();
