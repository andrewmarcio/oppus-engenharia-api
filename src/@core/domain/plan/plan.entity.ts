import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("plans")
export class Plan extends BaseEntity
{

    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number

    @Column("varchar")
    name: string

    @Column("double")
    value: Number

    @Column("varchar")
    type: string

    @Column("varchar")
    period: string

    @Column("tinyint", { default: true })
    active: boolean

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    UpdatedAt!: Date;
}