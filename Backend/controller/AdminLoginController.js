const Admin = require("../model/AdminLoginModel");


module.exports.AdminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const adminCount = await Admin.countDocuments();

        // Case 1: No admin exists — Register this user as admin
        if (adminCount === 0) {
            const newAdmin = await Admin.create({ email, password });
            return res.status(201).json({
                success: true,
                message: "Admin registered and logged in successfully",
                adminId: newAdmin._id,
            });
        }

        // Case 2: At least one admin exists — Proceed to login
        const admin = await Admin.findOne({ email });

        // Email not found
        if (!admin) {
            return res.status(401).json({ success: false, message: "Invalid email." });
        }

        // Password check (plaintext, consider hashing in real apps)
        if (password !== admin.password) {
            return res.status(401).json({ success: false, message: "Invalid password." });
        }

        // Successful login
        res.status(200).json({ success: true, message: "Login successful", adminId: admin._id, role: 'admin' });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

 

 