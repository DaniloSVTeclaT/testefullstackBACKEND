import {createConnection} from 'typeorm'

createConnection({
    type:"postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    extra:{
        ssl:{
            require:true,
            rejectUnauthorized:false
        }
        
    },
    entities:[
        "./src/models/*ts"
    ],
    migrations:[
        "./src/database/migrations/*ts"
    ],
    cli:{
        
            migrationsDir:
                "./src/database/migrations/"
            ,
            entitiesDir:"./src/models"
            
        
    }
    
})