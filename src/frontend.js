import express from 'express';

const app = express();

app.use('/', express.static('./src/static'));

app.listen(8080, () => {
  console.log('listening on 8080');
});