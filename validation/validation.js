const { body } = require("express-validator");

exports.registerValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required.")
    .isLength({ min: 3 })
    .withMessage("Name should be at least 3 characters long.")
    .isLength({ max: 50 })
    .withMessage("Name cannot exceed 50 characters."),

  body("email")
    .isEmail()
    .withMessage("Please provide a valid email.")
    .normalizeEmail(),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long.")
    .matches(/[0-9]/)
    .withMessage("Password must contain at least one number.")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter.")
    .matches(/[@$!%*?&]/)
    .withMessage("Password must contain at least one special character."),


  body("age")
    .optional()
    .isInt({ min: 18 })
    .withMessage("Age must be 18 or older.")
    .toInt(),

  body("phone")
    .optional()
    .isMobilePhone()
    .withMessage("Please provide a valid phone number.")
    .isLength({ min: 10, max: 15 })
    .withMessage("Phone number must be between 10 to 15 digits.")
    .trim(),

  body("address")
    .optional()
    .isLength({ max: 200 })
    .withMessage("Address cannot exceed 200 characters.")
    .trim(),

  body("country")
    .optional()
    .isLength({ min: 2, max: 50 })
    .withMessage("Country name should be between 2 and 50 characters.")
    .trim(),


];
