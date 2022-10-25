import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("companies")
export class Company extends BaseEntity
{

    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number

    @Column("varchar")
    name: string

    @Column("varchar", { length: 14 })
    cnpj: string

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    UpdatedAt!: Date;

}