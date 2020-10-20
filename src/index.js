import express from "express";
import path from "path";
import hbs from "./lib/handlebarsConfig.js";

const app = express();

app.engine('.hbs', hbs.engine);
app.set('views', path.resolve("./src/views"));
app.set('view engine', '.hbs');
app.use('/static', express.static(path.resolve("./src/static")));

app.get('/', function (req, res, next) {
  res.render('home');
});

app.listen(4000, () => {
  console.log('[TIMBLE] -> Server up on 4000');
});