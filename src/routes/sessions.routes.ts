import  {  Router } from "express";

import AuthenticateUserService from '../service/AuthenticateUserService'
const sessions = Router();

sessions.post('/',async(request,response)=>{
    
          const {email,password} = request.body
          const authenticateUser = new AuthenticateUserService();
          const {user,token} = await authenticateUser.execute({
            email,
            password
          })

          const userWithoutPassword = {            
            id: user.id,
            user_type: user.email,
            updated_at: user.updated_at,
            created_at: user.created_at,
           
            name: user.name,
     
        };

          return response.json({user:userWithoutPassword,token})

      
});

export default sessions