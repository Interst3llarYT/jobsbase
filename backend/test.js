const login = async (req, res) => {
    console.log("Request received for login.");


    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.json({ success: false, message: "Username and password are required." });
        }

       
        const user = await DashboardUserModel.findOne({ username });
        if (!user) {
            
            return res.status(401).json({ success: false, message: "User credentials are wrong." });
        }

        // const isMatch = await bcrypt.compare(password, user.password);
        // if (!isMatch) {
        //     return res.status(401).json({ success: false, message: "User credentials are wrong." });
        // }


        return res.json({
            success: true,
            message: "Logged in successfully",
            token,
            admin: user.name,
            role: user.role,
            userId: user._id,
            username: user.username
        });
    } 
    
    catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};