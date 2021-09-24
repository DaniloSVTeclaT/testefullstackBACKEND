import {MigrationInterface, QueryRunner,TableColumn,TableForeignKey} from "typeorm";

export default class AddConullnTasks1632366285178 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.addColumn(
            'tasks',
            new TableColumn({
              name: 'user_id',
              type: 'uuid',
              isNullable: true,
            }),
          );
        
        await queryRunner.createForeignKey(
            'tasks',
            new TableForeignKey({
              name: 'UserForeignKey',
              columnNames: ['user_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'userss_tasks',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );
      
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tasks','UserForeignKey')
        await queryRunner.dropColumn('tasks','user_id')
      
    }

}
