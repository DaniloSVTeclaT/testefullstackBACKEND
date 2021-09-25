import {getRepository, Not} from 'typeorm'
import {compare, hash} from 'bcryptjs'
import {sign,Jwt} from 'jsonwebtoken'
import authConfig from '../config/auth'

import User from '../models/users'

import AppError from '../errors/AppError'
interface Request {
    email:string;
    password:string;
}
interface Response {
    user:User;
    token:string;
}

class AuthenticateUserService{
    public async execute({email,password}:Request):Promise<Response>{
        const usersRepsitory = getRepository(User)

        const user  = await usersRepsitory.findOne({
            where: {email}
        })
        
        if (!user){
            throw new AppError('Incorrect email/password combination',401)
        }

        const passwordMatched = await compare(password,user.password) 
        if (!passwordMatched){
            throw new AppError('Incorrect email/password combination',401)
        }
        const {secret,expiresIn} = authConfig.jwt
        const token = sign({},secret,{
            subject:user.id,
            expiresIn: expiresIn
        })
        


        return {
            user,
            token,
        }

    }

}

export default AuthenticateUserService