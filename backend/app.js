import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';

const app = express();

app.use(express.json());
app.use('/api/user', router);
app.use('/api/blog', blogRouter);

mongoose
	.connect('mongodb://0.0.0.0:27017/API', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	// .connect(
	// 	'mongodb+srv://admin:1Tm0WiPUC7c8wn83@cluster0.ctfimh1.mongodb.net/Blog?retryWrites=true&w=majority'
	// 	{ useNewUrlParser: true, useUnifiedTopology: true }
	// )
	.then(() => app.listen(5000))
	.then(() =>
		console.log('Connected to the database and listening on localhost:5000')
	)
	.catch((err) => console.log(err));
