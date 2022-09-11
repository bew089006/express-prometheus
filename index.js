import express from 'express';

const app = express();

const APP_PORT = process.env.APP_PORT || 3000;

app.get('/', (req, res, next) => {
	res.status(200).send({
		message: 'Hello world',
		checked: `Test read ENV CHECK = ${process.env.CHECK}`,
	});
});

app.listen(APP_PORT, () => {
	console.log('Test read ENV CHECK = ', process.env.CHECK);
	console.log('Application starting at port ' + APP_PORT);
});

export default app;
