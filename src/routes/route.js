const express = require('express');
const router = express.Router();

const CollegeController=require("../Controllers/collegeController")

const InterController=require("../Controllers/internController")


router.post("/colleges",CollegeController.createCollege)

router.post("/interns",InterController.createInternDocument)

router.get("/collegeDetails",CollegeController.getcollegeDetails)




module.exports = router;