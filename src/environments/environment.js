import * as environment_dev from './environment.dev';
import * as environment_prod from './environment.prod';

let environment;

if (process.env.NODE_ENV == "production") {
  environment = environment_prod;
} else if (process.env.NODE_ENV == "development") {
  environment = environment_dev;
}

export default environment;
