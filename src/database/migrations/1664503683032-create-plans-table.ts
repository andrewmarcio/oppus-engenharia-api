import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createPlansTable1664503683032 implements MigrationInterface {

    private tableName: string = "plans";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: this.tableName,
                columns: [
                    {
                        name: "id",
                        type: "bigint",
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "value",
                        type: "double",
                    },
                    {
                        name: "type",
                        type: "varchar",
                    },
                    {
                        name: "period",
                        type: "varchar",
                    },
                    {
                        name: "active",
                        type: "tinyint",
                        length: "1"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                        isNullable: true,
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                        isNullable: true,
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}
