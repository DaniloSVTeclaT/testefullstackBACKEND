import {getRepository,getConnection} from 'typeorm'
import Tasks from '../models/tasks'

interface Request {
    name:string;
    description:string;
    status:string;
    user_id:string;

}
import AppError from '../errors/AppError'
import { response } from 'express'

class CreateTasksService{
    public async execute({
        name,
        description,
        status,
        user_id}:Request)
        :Promise<Tasks>{
        const tasksRepsitory = getRepository(Tasks)

        const checkTaskExist  = await tasksRepsitory.findOne({
            where: {name}
        })
        if (checkTaskExist){
            throw new AppError('Tasks alteready used.')
        }
        
        const tasks = tasksRepsitory.create({
            name,
            description,
            user_id,
            status
        })
        await tasksRepsitory.save(tasks)

        return tasks
    }

    public async viewone(id:string):Promise<Tasks>{
        const taskssRepsitory = getRepository(Tasks)

        const tasks  = await taskssRepsitory.findOne({
            where: {id}
        })
        
        if (!tasks){
            throw new AppError('Email address alteready used.')
        }
        return tasks

    }

    public async taskofuser(id:string){
        const taskssRepsitory = getRepository(Tasks)

        const tasks  = await taskssRepsitory.createQueryBuilder()
            .select()
            .where({ user_id: id}).getMany();
        
        
        if (!tasks){
            throw new AppError('Email address alteready used.')
        }

        return tasks

    }
    
  
    public async getall(){
        const taskssall = await getRepository(Tasks)
            
        const tasks = await taskssall.find()
        
        return tasks

    }

    public async delete(id: string) {
        await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Tasks)
        .where("id = :id", { id: id })
        .execute();
 
    
      

    }

    

    public async update(
        id:string,
        name:string,
        description:string,
        status:string,
      ):Promise<Tasks> {
        const repositoryUser = getRepository(Tasks)
        const tasks = await repositoryUser.findOne({ where: { id:String(id) } })
        
        if(!tasks){
            throw new AppError('User not found.',404)
        }  
        tasks.name= name,
        tasks.status=status,
        
        tasks.description=description,
              
        await repositoryUser.save(tasks)
          
        return tasks
    }    
    
    
}

export default CreateTasksService