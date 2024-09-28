const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    // eslint-disable-next-line no-undef
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
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
