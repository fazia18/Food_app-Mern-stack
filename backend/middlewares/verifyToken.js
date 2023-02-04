const jwt=require("jsonwebtoken")

const verifyToken=(req,res,next)=>{
    if(!req.headers.authorization) 
    return res.status(403).json({
        msg: "not authorized "
    })
     if(req.header.authorization && req.header.authorization.startswith("Bearer ")){
        const token=req.header.splir(" ")[1]
        jwt.verify(token,process.env.JWT_Secret,(err,data)=>{
            if(err) return res.status(403).json({msg:"Wrong or expired token."})
            else{
                req.user=data
                next()
            }
        })
    }
}



const verifyTokenAdmin=(req,res,next)=>{
    if(!req.headers.authorization) 
    return res.status(403).json({
        msg: "not authorized "
    })
     if(req.header.authorization && req.header.authorization.startswith("Bearer ")){
        const token=req.header.splir(" ")[1]
        jwt.verify(token,process.env.JWT_Secret,(err,data)=>{
            if(err) return res.status(403).json({msg:"Wrong or expired token."})
            else{
                if(!data.isAdmin) return res.status(403).json({msg:"You are not admin"})
                req.user=data
                next()
            }
        })
    }
}

module.exports={
    verifyToken,
    verifyTokenAdmin
}