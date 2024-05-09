import { verify } from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    try{
        const token = authHeader && authHeader.split(' ')[1];
        if(token == null){
            res.status(401); //Unauthorized
        }

        verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if(err){
                res.status(401).json({ success: false, message: "Invalid Token" }); //Forbidden
            }

            req.user = user
            next();
        })
    }catch(err){
        res.status(401).json({ success: false, message: "Invalid Token" });
    }
}

export default authenticateToken;