import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class createModuleLessonsTable1664561508864 implements MigrationInterface {

    private tableName: string = "module_lessons";

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
                        name: "module_id",
                        type: "bigint",
                        unsigned: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "youtube_video_id",
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

        const foreignKeyModuleId = new TableForeignKey({
            columnNames: ["module_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "course_modules",
            onDelete: "CASCADE"
        });

        await queryRunner.createForeignKey(this.tableName, foreignKeyModuleId);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(this.tableName, "module_id");
        await queryRunner.dropTable(this.tableName);
    }

}
