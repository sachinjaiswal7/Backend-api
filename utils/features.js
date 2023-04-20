import jwt from "jsonwebtoken"

export const sendCookie = (res,_id,message, statusCode) => {
    const token =  jwt.sign({_id : _id} , process.env.JWT_PRIVATE_KEY);
    res.status(statusCode).cookie("token" , token , {
        httpOnly : true,
        maxAge : 15 * 60 * 100,
        sameSite : ((process.env.NODE_ENV == "Development") ? "lax" : "none" ),
        secure : ((process.env.NODE_ENV == "Development") ? false : true), 
    }).json({
        success : true,
        message : message
    })
}