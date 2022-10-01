import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class createCoursesStudentsTable1664561468220 implements MigrationInterface {

    private tableName: string = "course_students";

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
                        name: "student_id",
                        type: "bigint",
                        unsigned: true,
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
            onDelete: "CASCADE"
        });

        const foreignKeyStudentId = new TableForeignKey({
            columnNames: ["student_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "students",
            onDelete: "CASCADE"
        });

        await queryRunner.createForeignKey(this.tableName, foreignKeyCourseId);
        await queryRunner.createForeignKey(this.tableName, foreignKeyStudentId);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(this.tableName, "course_id");
        await queryRunner.dropForeignKey(this.tableName, "student_id");
        await queryRunner.dropTable(this.tableName);
    }

}
