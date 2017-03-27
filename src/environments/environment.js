import environment_dev from './environment.dev';
import environment_prod from './environment.prod';
import environment_test from './environment.test';

//let environment = environment_dev;
let environment;

if (process.env.NODE_ENV == "production") {
  environment = environment_prod;
} else if (process.env.NODE_ENV == "development") {
  environment = environment_dev;
} else {
  environment = environment_test;
}

export default environment;
