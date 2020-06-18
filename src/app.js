import express from 'express';
import * as path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/../../frontend/dist')));
app.use(express.static(path.join(__dirname, '/../../frontend/public')));

app.get('/health', (req, res) => {
  res.json({ message: 'Hello World!' });
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../../frontend/public/index.html'));
});

process.on('uncaughtException', (error) => {
  // eslint-disable-next-line
  console.error('uncaughtException', { error });
  process.exit(1);
});

process.on('unhandledRejection', (reason, p) => {
  // eslint-disable-next-line
  console.error('unhandledRejection', { reason, p });
  process.exit(1);
});

export default app;
