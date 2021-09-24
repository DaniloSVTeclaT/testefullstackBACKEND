import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm'

 

@Entity('userss_tasks')
class Users{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column("integer")
    order:number;

    @Column()
    name:string;
    
    @Column()
    password:string;

    @Column()
    email:string;
    
    @Column()
    tasks:string;
    
    @Column('boolean')
    status:boolean;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  
   
}

export default Users