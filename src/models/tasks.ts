import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm'
import User from './users'

@Entity('tasks')
class Tasks{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('integer')
    order:number;
    
    @Column()
    name:string;

    @Column()
    user_id:string;

    @ManyToOne(()=>User)
    @JoinColumn({name:'user_id'})
    userss: User

    @Column()
    description:string;

    @Column()
    status:string;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  
   
}

export default Tasks