import express from 'express';
import path from 'path';
import opn from 'opn';

/*eslint-disable no-console*/
const port = 3000;
const app = express();

app.use(express.static('dist'));

app.get('*', function(req, res){
  res.sendFile(path.join( __dirname, '../dist/index.html'));
});

app.listen(port, function(error) {
  if(error) {
    console.log(error);
  } else {
    //open(`http://localhost:${port}`);
    opn(`http://localhost:${port}`, {app: 'google chrome'});
  }
});
