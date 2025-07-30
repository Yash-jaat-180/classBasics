import express from 'express'

const app = express();
const PORT = 80;
app.use(express.static('public'));
app.use((req, res, next, err) => {
    console.log("Some error occured"); // if any error occur in processing req then control will come here.
})
app.listen(3000, () => {
    console.log("Server listening on port" + PORT);
})