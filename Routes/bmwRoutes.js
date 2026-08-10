import express from "express";
import {
    home,
    search,
    configure,
    testDrive
} from "../controllers/bmwController.js";

const router = express.Router();


router.get("/", home);


router.get("/search.ejs", search);


router.get("/configure.ejs", configure);


router.get("/testdrive.ejs", testDrive);

export default router;