const express = require("express");
const Department = require("../model/department")
const Team = require("../model/team")
const User = require("../model/user")

const router = express.Router()

/// get request
router.get("/department", async(req, res) => {
  try {
    const department = await Department.find()
    res.status(200).json({
      success:true,
      data:department
    })
  } catch (err) {
    res.status(400).json("fail to find")
  }
})

router.get("/department/:id", async(req, res) => {
   try {
    const department = await Department.findById(req.params.id)
    res.status(200).json({
      success:true,
      data:department
    })
  } catch (err) {
    res.status(400).json("cannot find")
  }
})

router.get("/team", async (req, res) => {
   try {
    const team = await Team.find()
    res.status(200).json({
      success:true,
      data:team
    })
  } catch (err) {
    res.status(400).json("fail to find")
  }
})
router.get("/team/:id", async (req, res) => {
  try {
    const team = await Team.findById(req.params.id)
    res.status(200).json({
      success:true,
      data:team
    })
  } catch (err) {
    res.status(400).json("cannot find")
  }
})

router.get("/user", async (req, res) => {
   try {
    const user = await User.find()
    res.status(200).json({
      success:true,
      data:user
    })
  } catch (err) {
    res.status(400).json("fail to find");
  }
})

router.get("/user/:id", async (req, res) => {
    try {
    const user = await User.findById(req.params.id)
    res.status(200).json({
      success:true,
      data:user
    })
  } catch (err) {
    res.status(400).json("cannot find")
  }
})

//Post request

router.post("/departments", async (req, res) => {
  console.log(req.body)
  try {
    const department = await Department.create(req.body)
    res.status(200).json({
      success:true,
      data:department
    })
  } catch (err) {
    res.status(400).json("Fail to create")
  }
})

router.post("/teams", async (req, res) => {
  console.log(req.body)
  try {
    const team = await Team.create(req.body)
    res.status(200).json({
      success:true,
      data:team
    })
  } catch (err) {
    res.status(400).json("Fail to create")
  }
})
router.post("/users", async (req, res) => {
   try {
    const user = await User.create(req.body)
    res.status(200).json({
      success:true,
      data:user
    })
  } catch (err) {
    res.status(400).json("Fail to create")
  }
  
})

//Put request

router.put("/departments/:id", async (req, res) => {
  let department = await Department.findById(req.params.id)

  if(!department){
    return res.status(400).json("department not found")
  }
  department = await Department.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  department.save();

  res.status(200).json({
    success: true,
    data: department
  })


})
router.put("/teams/:id", async (req, res) => {
  let team = await Team.findById(req.params.id)

  if(!team){
    return res.status(400).json("Team not found")
  }
  team = await Team.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  team.save()

  res.status(200).json({
    success: true,
    data: team
  })
})
router.put("/users/:id", async (req, res) => {
  let user = await User.findById(req.params.id)

  if(!user){
    return res.status(400).json("User not found")
  }
  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  user.save()
  res.status(200).json({
    success: true,
    data: user
  })
})

module.exports = router;
