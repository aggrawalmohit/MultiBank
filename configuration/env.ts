type Environment = 'tst' | 'prod';

const env: Record<Environment, string> = {
  tst: 'https://tst.mb.io/en',   // need to add dev URL here
  prod: 'https://mb.io/en',
};

const key = (process.env.TEST_ENV || 'prod') as Environment;

if (!(key in env)) {
  throw new Error(`Invalid environment variable: ${key}.`);
}

const url: string = env[key];
export default url;