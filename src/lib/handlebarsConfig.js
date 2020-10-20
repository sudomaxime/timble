import exphbs from "express-handlebars";
import * as helpers from "./handlebarsHelpers.js";

export default exphbs.create({
  helpers: {
    "from": helpers.withData,
  },
  extname: '.hbs'
});