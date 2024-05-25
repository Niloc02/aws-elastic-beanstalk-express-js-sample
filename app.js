const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!  This message is brought to you by the good folks at Github and AWS Elastic Beanstalk.  Tune in later for something more interesting. '));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
