const getusercontroller = require("../controllers/users/getusercontroller");

const express = require("express");
const router = express.Router();

router.get("/",getusercontroller);
router.get("/role/:role",getusercontroller);
router.get("/gender/:gender",getusercontroller);
router.get("/age/:age",getusercontroller);

router.get("/random",getusercontroller);
router.get("/highest-skills",getusercontroller);
router.get("/lowtohigh",getusercontroller);
router.get("/hightolow",getusercontroller);



module.exports = router;