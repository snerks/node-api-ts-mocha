process.env.NODE_ENV = 'test';

module.exports = {
  require: 'ts-node/register',
  extension: ['ts'],
  spec: ['"src/**/*.spec.ts"'],
}