
const monggoes =require('mongoose')

const userSchema = new monggoes.Schema({
    name:{Type:String},
    email:{Type:String},
    password:{Type:String},
    photo:{type:String},
    age:{type:String},
    phone:{type:String},
    address:{type:String},
    country:{type:String},
    
},{
    timestamps:true
})

const userModel = monggoes.model('user',userSchema)
module.exports = userModel;


// // models/userModel.js

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
      
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true
//     },
//     password: {
//       type: String,
//       required: true,
//       minlength: 6,
//     },
//     role: {
//       type: String,
//       enum: ['admin', 'user'],
//       default: 'user',
//     },
//     age: {
//       type: Number,
//       min: 18,
//     },
//     phone: {
//       type: String,
//       minlength: 10,
//       maxlength: 15,
//     },
//     address: {
//       type: String,
//       maxlength: 200,
//     },
//     country: {
//       type: String,
//       minlength: 2,
//       maxlength: 50,
//     },
//     photo: {
//       type: String, 
//     },
//   },
//   {
//     timestamps: true,
//   }
// );


// const User = mongoose.model('User', userSchema);
// module.exports = User;
