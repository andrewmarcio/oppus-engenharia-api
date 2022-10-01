import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class createCompanyStudentsTable1664503819383 implements MigrationInterface {

    private tableName: string = "company_students";

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
                        name: "company_id",
                        type: "bigint",
                        unsigned: true,
                    },
                    {
                        name: "student_id",
                        type: "bigint",
                        unsigned: true,
                    },
                    {
                        name: "admission_date",
                        type: "date",
                    },
                    {
                        name: "role",
                        type: "varchar",
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

        const foreignKeyCompanyId = new TableForeignKey({
            columnNames: ["company_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "companies",
        });

        const foreignKeyStudentId = new TableForeignKey({
            columnNames: ["student_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "students",
            onDelete: "CASCADE"
        });

        await queryRunner.createForeignKey(this.tableName, foreignKeyCompanyId);
        await queryRunner.createForeignKey(this.tableName, foreignKeyStudentId);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(this.tableName, "company_id");
        await queryRunner.dropForeignKey(this.tableName, "student_id");
        await queryRunner.dropTable(this.tableName);
    }

}
