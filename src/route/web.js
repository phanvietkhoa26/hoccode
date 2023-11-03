import express from "express";
import homecontroller from "../controllers/homecontroller";


let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homecontroller.getHomePage);

    router.get('/about', homecontroller.getAboutPage);


    router.get('/admin', (req, res) => {
        return res.send('chao mung den admin')
    });


    // return router;
    return app.use("/", router);
}

module.exports = initWebRoutes;


