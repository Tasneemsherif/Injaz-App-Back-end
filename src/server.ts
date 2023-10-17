import express from 'express';
import cors from 'cors';
import connectToDatabase from './db';
import userRoutes from './routes/user.routes'; 
import taskRoutes from './routes/task.routes';
import categoryRoutes from './routes/category.routes';


const app = express();
app.use(express.json()) 
app.use(cors());

const Port = 1337;

connectToDatabase();


app.get('/', (req, res) => {
  res.send('Hello World!');
});
 
app.use ('/users',userRoutes);
app.use ('/categories', categoryRoutes)
app.use ('/tasks', taskRoutes)

app.listen(Port, () => {
    console.log(`Server started at http://localhost:${Port}`)
});