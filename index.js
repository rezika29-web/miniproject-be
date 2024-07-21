const express = require("express")
const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync()

// routes
app.put("/test/:nama", (req, res) => {
  console.log(req.params.nama);
  const data ={
    "name":"rezika",
    "message": "App started"
  }
    res.json(req.params.nama);
});
// Set template engine
app.set('view engine', 'ejs');

// Handling 404 - Route not found
app.use((req, res, next) => {
  res.status(404).render('notfound', { url: req.originalUrl });
});



// secured routes
require("./app/routes/peserta.route")(app)


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
