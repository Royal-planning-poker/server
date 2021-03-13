import { createApplication } from 'graphql-modules';
import { playerModule } from './src/modules/players';

export const app = createApplication({
  modules: [playerModule],
});
