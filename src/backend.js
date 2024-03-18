import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({
  allowedHeaders: 'x-my-request-header',
  exposedHeaders: 'x-my-response-header',
}));

app.get('/', (req, res) => {
  res.setHeader('x-my-response-header', 'some content that goes in header');
  res.send(JSON.stringify({ myData: 'test' }));
});

app.listen(3000, () => {
  console.log('listening on 3000');
});