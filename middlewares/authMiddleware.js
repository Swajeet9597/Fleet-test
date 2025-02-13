

const authToken = async(req,res,next)=>{
    try {
        
        const token = req.cookies?.token;

        // console.log("tokentoken",token);

        if(!token){
            return res.status(400).json({
                success:false,
                msg:"Token not found"
            })
        }
        // next

    } catch (error) {
        console.log(error);
    }
}


module.exports = authToken