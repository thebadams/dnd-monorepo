import { bootstrap } from '@dnd-monorepo/fastify-utilities';
import { registerServer } from './app/config/server';

// const bootstrap = async () => {
//   const server = await registerServer();
//   server.listen(4000);
// };

// bootstrap();
bootstrap(registerServer);
