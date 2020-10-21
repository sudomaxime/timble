import express from "express";
import path from "path";
import hbs from "./handlebarsConfig.js";
import router from "./defaultRouter.js";

export default function (config) {
  const app = express();
  
  app.engine('.hbs', hbs(config.helpers));
  app.set('views', path.resolve("./src/views"));
  app.set('view engine', '.hbs');
  app.use('/assets/content/*', (req, res) => res.status(404).send())
  app.use('/assets', express.static(path.resolve("./src/assets")));
  app.use(config.router);
  
  app.listen(config.port, () => {
    console.log('[TIMBLE] -> Server up on 4000');
  });
};

export { router };
