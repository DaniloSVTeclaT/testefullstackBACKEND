import  {  Router } from "express";
import CreateUserService from '../service/CreateUserService'

import ensureAuthenticated from '../middleware/ensureAuthenticated'

const users_bv_Router = Router();




users_bv_Router.post('/',async(request,response)=>{
   
          const {name,email,password,tasks} = request.body
          const createUser = new CreateUserService()

          const user = await createUser.execute({
            name,
            email,
            password,
            tasks,
            status:true
              
          })

         
           
          const userWithoutPassword = {
              id: user.id,
              order: user.order,
              name: user.name,
              email: user.email,
              tasks: user.tasks,
              status:user.status,
              
              created_at: user.created_at,
              updated_at: user.updated_at,
          };

          return response.json(userWithoutPassword)

        
});
users_bv_Router.use(ensureAuthenticated)
users_bv_Router.patch('/:id',async(request,response)=>{
  
        const {id} = request.params
        const {name,email,tasks} = request.body
        const updateUser = new CreateUserService()
        const user = await updateUser.update(         
          id,
          name,
          email,
          tasks
        
        )
        const userWithoutPassword = {
          id: user.id,
          order: user.order,
          name: user.name,
          email: user.email,
          tasks: user.tasks,
          status: user.status,
          created_at: user.created_at,
          updated_at: user.updated_at,
         
         
      }

      return response.json(userWithoutPassword)

     
});
users_bv_Router.get('/',async(request,response)=>{
  
        const viewUsers = new CreateUserService()
        const user = await viewUsers.getall()

       
       

        const userWithoutPassword = user.map(user=>({
          id: user.id,
          order: user.order,
          name: user.name,
          email: user.email,
          tasks: user.tasks,
          status: user.status,
          created_at: user.created_at,
          updated_at: user.updated_at,
         
         
      }))

      return response.json(userWithoutPassword)

});
users_bv_Router.get('/:id',async(request,response)=>{
 
    const {id} = request.params
    const viewUser = new CreateUserService()
    const user = await viewUser.viewone(id)      
    const userWithoutPassword = {
      id: user.id,
      order: user.order,
      name: user.name,
      email: user.email,
      tasks: user.tasks,
      status: user.status,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };


    return response.json(userWithoutPassword)
    
  
});
users_bv_Router.delete('/:id',async(request,response)=>{
 
    const {id} = request.params
    const deleteUser = new CreateUserService()
    const user = await deleteUser.delete(id)      

    return response.json({message:"Disabled user"})
    
  
});
export default users_bv_Router