import  {  Router } from "express";
import CreateTasksService from '../service/CreateTaskService'

import ensureAuthenticated from '../middleware/ensureAuthenticated'

const tasks_Router = Router();

interface Tasks {
  id: string;
  order: string;
  name: string;
  description: string;
  status:string;
  created_at:string;
  updated_at: string;
}


tasks_Router.post('/',async(request,response)=>{
   
 
          const {name,description,user_id,status} = request.body
          const createTasks = new CreateTasksService()
          
          const tasks = await createTasks.execute({
            name,
            description,
            user_id,
            status
              
          })

         
           
          const tasksViews = {
              id: tasks.id,
              order: tasks.order,
              name: tasks.description,
              status:tasks.status,
              created_at: tasks.created_at,
              updated_at: tasks.updated_at,
          };

          return response.json(tasksViews)

        
});
tasks_Router.use(ensureAuthenticated)
tasks_Router.patch('/:id',async(request,response)=>{
  
        const {id} = request.params
        const {name,description,status} = request.body
        const updateTasks = new CreateTasksService()
        const tasks = await updateTasks.update(         
          id,
          name,
          description,
          status
        
        )
        const tasksViews = {
          id: tasks.id,
          order: tasks.order,
          name: tasks.name,
          description: tasks.description,
          status: tasks.status,
          created_at: tasks.created_at,
          updated_at: tasks.updated_at,
         
         
      }

      return response.json(tasksViews)

     
});
tasks_Router.get('/',async(request,response)=>{
  
        const viewTasks = new CreateTasksService()
        const tasks = await viewTasks.getall()

        const tasksViews = tasks.map(tasks=>({
          id: tasks.id,
          order: tasks.order,
          name: tasks.name,
          description: tasks.description,
          status: tasks.status,
          created_at: tasks.created_at,
          updated_at: tasks.updated_at,
         
         
      }))

      return response.json(tasksViews)

});
tasks_Router.get('/users/:id',async(request,response)=>{
  const {id} = request.params
  const viewTasks = new CreateTasksService()
  const tasks = await viewTasks.taskofuser(id)


  return response.json(tasks)

});
tasks_Router.get('/:id',async(request,response)=>{
 
    const {id} = request.params
    const viewTasks = new CreateTasksService()
    const tasks = await viewTasks.viewone(id)      
    const tasksViews = {
      id: tasks.id,
      order: tasks.order,
      name: tasks.name,
      description: tasks.description,
      status: tasks.status,
      created_at: tasks.created_at,
      updated_at: tasks.updated_at,
    };


    return response.json(tasksViews)
    
  
});
tasks_Router.delete('/:id',async(request,response)=>{
 
    const {id} = request.params
    const deleteTasks = new CreateTasksService()
    const tasks = await deleteTasks.delete(id)      

    return response.json({message:"Disabled Tasks"})
    
  
});
export default tasks_Router