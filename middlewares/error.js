export class ErrorHandlder extends Error{
    constructor(message , statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorHandler = (err,req,res,next) => {
    if(!err.message || err.message === "")err.message = "Internal Server Error";
    if(!err.statusCode)err.statusCode = 500;
    return res.status(err.statusCode).json({
        success : false,
        message : err.message
    })
}

