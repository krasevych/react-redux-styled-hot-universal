import { server } from 'universal-webpack';
import settings from '../../webpack/universal-webpack-settings.json';
import config from '../../webpack/webpack.config';

server(config, settings);
