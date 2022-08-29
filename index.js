import express from 'express';

const APP_PORT = 3000;

const app = express();

app.get('/', (req, res, next) => {
	res.status(200).send({
		message: 'Hello world',
	});
});

app.listen(APP_PORT, () => {
	console.log('Test read ENV CHECK = ', process.env.CHECK);
	console.log('Application starting at port ' + APP_PORT);
});

export default app;
