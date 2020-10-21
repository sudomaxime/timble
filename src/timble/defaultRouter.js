import express from "express";
const router = express.Router();

/**
 * Lot of functionalities to come here !
 */

router.use((req, res, next) => {
  res.locals = {
    timble: {
      query: req.query,
      params: req.params,
      protocol: req.protocol,
      host: req.get('host'),
      pathname: req.originalUrl
    }
  }

  next();
})

export default router;