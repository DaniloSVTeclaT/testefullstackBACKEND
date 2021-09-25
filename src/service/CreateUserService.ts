import {getRepository, Not} from 'typeorm'
import User from '../models/users'
import {hash} from 'bcryptjs'
interface Request {
    name:string;
    email:string;
    password:string;
    tasks:string;
    status:boolean;


}
import AppError from '../errors/AppError'

class CreateUserService{
    public async execute({
        name,
        email,
        password,
        tasks,
        status
        }:Request)
        :Promise<User>{
        const usersRepsitory = getRepository(User)

        const checkUserExist  = await usersRepsitory.findOne({
            where: {email}
        })
        if (checkUserExist){
            throw new AppError('Email address alteready used.')
        }
        const hashedpassword = await hash(password,8)
        const user = usersRepsitory.create({
            name,
            email,
            password:hashedpassword,
            tasks,
            status
            
        })
        await usersRepsitory.save(user)

        return user
    }

 
    public async viewone(id:string):Promise<User>{
        const usersRepsitory = getRepository(User)

        const user  = await usersRepsitory.findOne({
            where: {id}
        })
        
        if (!user){
            throw new AppError('Email address alteready used.')
        }
        return user

    }

   
    public async getall(){
        const usersall = await getRepository(User)
            
        const users = await usersall.find()
        
        return users

    }

    public async delete(id: string) {
        const userDelete = getRepository(User)
        const user = await userDelete.findOne({where:{id:String(id)}})   
        if(!user){
            throw new AppError('User not found.',404)
        } 
        user.status = false
        await userDelete.save(user)

    }

    public async update(
        id:string,
        name:string,
        email:string,
        tasks:string,
        
        ):Promise<User> {
        const repositoryUser = getRepository(User)
        const user = await repositoryUser.findOne({ where: { id:String(id) } })
        
        if(!user){
            throw new AppError('User not found.',404)
        }  
        user.name= name,
        user.email=email,
        user.tasks=tasks,
            
        await repositoryUser.save(user)
          
        return user
    }    
    
    
}

export default CreateUserService