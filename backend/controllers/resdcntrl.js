import expressAsyncHandler from "express-async-handler";
import { Prisma } from "@prisma/client";

export const createResidency=asyncHandler(async(req,res)=>{
  //  console.log("endpoint created")
  const{title,description,price,address,country,city,facilities,image,userEmail}=req.body.data

  console.log(req.body.data)
  try{
    const residency=await prisma.residency.create({
      data:{
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        ower:{email:userEmail},
      },
    });
    res.send({message:"Residency created successfully",residency})
  }catch(err){
    if(err.code==="P2002")
    {
      throw new Error("err.message")
      
    }
  }
});


