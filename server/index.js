const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();


const { mongoose } = require('./database');
//settings

app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4202' }))

//routes
app.use('/api/task', require('./routes/task.routes'));
app.use('/api/user', require('./routes/user.routes'));
//statring the server

app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));

})