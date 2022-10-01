import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class createStudentPlansTable1664561554217 implements MigrationInterface {

    private tableName: string = "student_plans";

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
                        name: "student_id",
                        type: "bigint",
                        unsigned: true,
                    },
                    {
                        name: "plan_id",
                        type: "bigint",
                        unsigned: true,
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

        const foreignKeyStudentId = new TableForeignKey({
            columnNames: ["student_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "students",
            onDelete: "CASCADE"
        });

        const foreignKeyPlanId = new TableForeignKey({
            columnNames: ["plan_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "plans",
            onDelete: "CASCADE"
        });

        await queryRunner.createForeignKey(this.tableName, foreignKeyStudentId);
        await queryRunner.createForeignKey(this.tableName, foreignKeyPlanId);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(this.tableName, "student_id");
        await queryRunner.dropForeignKey(this.tableName, "plan_id");
        await queryRunner.dropTable(this.tableName);
    }

}
