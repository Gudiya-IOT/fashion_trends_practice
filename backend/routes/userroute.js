const getusercontroller = require("../controllers/users/getusercontroller");

const express = require("express");
const router = express.Router();

router.get("/users",getusercontroller);
router.get("/users/role/:role",getusercontroller);
router.get("/users/gender/:gender",getusercontroller);
router.get("/users/age/:age",getusercontroller);

router.get("/users/random",getusercontroller);
router.get("/users/highest-skills",getusercontroller);
router.get("/users/lowtohigh",getusercontroller);
router.get("/users/hightolow",getusercontroller);



module.exports = router;