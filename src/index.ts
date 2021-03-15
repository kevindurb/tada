import { Environment } from './utils/Environment';
import { App } from './App';

const server = App.getServer();

server.listen(Environment.getPort(), (err, address) => {
  if (err) {
    return console.error(err);
  }

  console.log(`Listening on ${address}`);
});
