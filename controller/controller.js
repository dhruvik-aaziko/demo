const userModel = require("../model/user");



module.exports.userCreate = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const photos = req.files.photo; 
    
    if (!photos || photos.length === 0) {
      return res.status(400).send("No photos uploaded.");
    }

    const photoPaths = photos.map(photo => photo.path); 
    
    const newUser = new userModel({
      name,
      email,
      password,
      photo: photoPaths 
    });

    await newUser.save();

    res.status(201).send({ message: "User created successfully", user: newUser });

  } catch (error) {
    console.log("This is error:", error);
    res.status(500).send("Server Error");
  }
};
