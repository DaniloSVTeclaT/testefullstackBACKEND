import 'reflect-metadata'
import express, {Request,Response, NextFunction } from 'express'
import './database'
import 'express-async-errors'
import routes from './routes';

import AppError from './errors/AppError';
import cors from 'cors';
const app = express();
app.use(cors())
app.use(express.json());
app.use(routes)

app.use((err:Error,request:Request,response:Response,next:NextFunction)=>{
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            status:'error',
            message: err.message
        })
    }
    console.log(err)
    //console.log(">>>>>>>>>>>>>>"+process.env.DATABASE_URL)
     
    return response.status(500).json({
        status:'error',
        message:'Internal server error'
    })
})

app.listen(process.env.PORT ||3333,()=>{
    console.log('Server start sucess on port '+process.env.POR)
})