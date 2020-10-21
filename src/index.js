import timble from "./.timble/index.js";
import router from "./routes.js";
import helpers from "./helpers.js";

timble({
  port: 4000,
  router,
  helpers
});