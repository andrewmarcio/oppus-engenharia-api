import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class createCourseModulesTable1664561491518 implements MigrationInterface {

    private tableName: string = "course_modules";

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
                        name: "course_id",
                        type: "bigint",
                        unsigned: true,
                    },
                    {
                        name: "name",
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

        const foreignKeyCourseId = new TableForeignKey({
            columnNames: ["course_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "courses",
        });

        await queryRunner.createForeignKey(this.tableName, foreignKeyCourseId);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(this.tableName, "course_id");
        await queryRunner.dropTable(this.tableName);
    }

}
