import { router } from "./timble/index.js";

router.get('/', function (req, res) {
  res.render('home');
});

export default router;