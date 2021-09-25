import {MigrationInterface, QueryRunner,Table} from "typeorm";

export default class CreateUser1631492719021 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: 'userss_tasks',
                columns: [
                    {
                        name:"id",
                        type: 'uuid',
                        isPrimary:true,
                        generationStrategy:'uuid',
                        default:'uuid_generate_v4()',
                    },
                    {
                        name: 'order',
                        type: 'integer',
                        isGenerated: true
                    },
                    {
                        name:'name',
                        type:'varchar',
                       
                    },
                    {
                        name:'email',
                        type:'varchar',
                        isUnique: true
                       
                    },
                    {
                        name: 'tasks',
                        type: 'varchar',
                    
                    },
                    {
                        name:'password',
                        type:'varchar',
                       
                    },
                    
                    {
                        name: 'status',
                        type: 'boolean',
                    },
                       
                    {
                        name:'created_at',
                        type:'timestamp',
                        default:'now()',
                    },
                    {
                        name:'updated_at',
                        type:'timestamp',
                        default:'now()',
                    }
                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('userss_tasks')
    }

}
