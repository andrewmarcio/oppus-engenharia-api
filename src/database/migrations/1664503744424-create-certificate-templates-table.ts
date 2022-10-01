import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class createCertificateTemplatesTable1664503744424 implements MigrationInterface {

    private tableName: string = "certificate_templates";

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
                        name: "template",
                        type: "text",
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

        const foreignKey = new TableForeignKey({
            columnNames: ["course_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "courses",
            onDelete: "CASCADE"
        });

        await queryRunner.createForeignKey(this.tableName, foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(this.tableName, "course_id");
        await queryRunner.dropTable(this.tableName);
    }

}
