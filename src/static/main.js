fetch(
  'http://localhost:3000/',
  { method: 'HEAD', 'headers': { 'x-my-request-header': 'my-value' } }
).then(resp => console.log(resp.headers.get('x-my-response-header')));