const express = require('express');
const app = express();

const router = require('./router/index');

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.use('/api', router);

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})