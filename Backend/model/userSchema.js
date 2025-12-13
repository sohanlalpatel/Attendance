const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        resetPasswordToken: {
            type: String,
        },

        resetPasswordExpire: {
            type: Date,
        },
        password: {
            type: String,
            required: true, // bcrypt hashed
            minlength: 6,
        },

        role: {
            type: String,
            enum: ["HR", "EMPLOYEE"],
            default: "EMPLOYEE",
        },

        phone: {
            type: String,
            required: true,
        },

        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
        },

        employeeId: {
            type: String,
            unique: true,
            sparse: true,
        },

        profileImage: {
            type: String, // Cloudinary / local URL
        },

        status: {
            type: String,
            enum: ["Active", "Inactive"],
            default: "Active",
        },
    },
    { timestamps: true }
);

module.exports=  mongoose.model("User", userSchema);
