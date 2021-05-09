import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1618959972551 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // yarn typeorm migration:run - Este comando criar/atualiza as migration ao ser executado.
        await queryRunner.createTable(
            new Table({
                name: "settings",
                columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true
                    },
                    {
                        name:"userName",
                        type:"varchar"
                    },
                    {
                        name:"chat",
                        type:"boolean",
                        default: true
                    },
                    {
                        name:"update_at",
                        type:"timestamp",
                        default:"now()"
                    },
                    {
                        name:"created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //yarn typeorm migration:revert - Reverter qualquer alteração com erro das migrations.
        await queryRunner.dropTable("settings"); // Caso tiver problemas, ao executar o revert a tabela será removida para ser criada novamente se necessário;
    }

}
