import admin from "../firebase.js"

export async function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

    if (!token){
        return res.status(401).json({error: "No token provided"});
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
        next();
    }catch (err) {
        console.log(err);
        return res.status(401).json({error: "Invalid or expired token"})
    }

}