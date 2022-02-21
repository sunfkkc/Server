import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
dotenv.config();


const server = express();
server.use(express.json());
server.use('/api/user',userRoutes);

mongoose.connect(process.env.MONGODB_URL,(err)=>{
    
    
    if(err){
        console.log(err);
    }
    else{
        console.log("DB connect");
        server.listen(3000,()=>{console.log('3000 port server opened')})
    }
})