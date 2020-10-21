import exphbs from "express-handlebars";
import defaultHelpers from "./defaultHelpers.js";

export default function configHBS (helpers = {}) {
  let hbs = exphbs.create({
    helpers: {
      ...defaultHelpers,
      ...helpers
    },
    extname: '.hbs'
  });

  return hbs.engine;
}