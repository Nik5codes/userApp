const User =require('');//models url

exports.createUser=async(req,res)=>{
    try{
        const users=new User(req.body)
        await users.save()
        res.json(users)
    }catch(err){
        console.log("error",err)
        res.json({message:"Data not saved"})
    }
}

exports.fetchUser=async(req,res)=>{
    try{
        const users=await User.find()
        res.json(users)
    }catch(err){
        console.log("error",err)
        res.json({message:"data not saved"})
    }
}

exports.fetchById=async(req,res)=>{
    try{
        const id=req.params.id
        const users=await User.findById(id)
        if(!users){
            return res.json({message:"User not found"})
        }
        res.json(users)
    }catch(err){
        console.log('error',err)
        res.json({message:"Data not saved"})
    }
}

exports.updateById=async (req,res)=>{
    try{
        const id=req.params.id
        const users =await User.findByIdAndUpdate(id,req.body,{new:true})
        if(!users){
            return res.json({message:"User not found"})
        }
        res.json(users)
    }catch(err){
        console.log("error",err)
        res.json({message:"user not found"})
    }
}

exports.deleteById=async(req,res)=>{
    try {
            const id = req.params.id;
            const users = await User.findByIdAndDelete(id);
            if (!users) {
                return res.json({ message: "user not found" });
            }
            res.json(users);
        } catch (err) {
            console.log("error", err);
            res.json({ message: "user not saved" })
        }
}