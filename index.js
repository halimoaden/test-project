require('dotenv').config();
const express = require('express');
const app = express();

// routers required
const userRouter = require('./routes/user');

const port = process.env.PORT || 4000;

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
	res.send('Here is the Home page, Go other pages please.');
})

app.listen(port, () => {
	console.log(`Server is running in http://localhost:${port}`);
})