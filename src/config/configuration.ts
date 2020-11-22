export default () => ({
  port: parseInt(process.env.DEV_PORT),
  host: process.env.DEV_HOST,
});
