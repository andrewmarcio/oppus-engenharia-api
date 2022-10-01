import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createPaymentsTable1664561564922 implements MigrationInterface {

    private tableName: string = "payments";

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
                        name: "student_plan_id",
                        type: "bigint",
                        unsigned: true,
                    },
                    {
                        name: "payment_date",
                        type: "timestamp",
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
        await queryRunner.dropForeignKey(this.tableName, "student_plan_id");
        await queryRunner.dropTable(this.tableName);
    }

}
