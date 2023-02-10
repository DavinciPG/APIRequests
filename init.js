
require('dotenv').config();
const Express = require('express');
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// Port is stored in the process environment variable
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});

