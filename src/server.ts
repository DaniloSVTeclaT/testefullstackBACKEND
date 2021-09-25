import 'reflect-metadata'
import express, {Request,Response, NextFunction } from 'express'
import 'express-async-errors'
import routes from './routes';
import './database'
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
    console.log(">>>>>>>>>>>>>>"+process.env.DATABASE_URL)
     
    return response.status(500).json({
        status:'error',
        message:'Internal server error'
    })
})

app.listen(process.env.PORT ||5000,()=>{
    console.log('Server start sucess on port 3333')
})