import { Type } from "class-transformer"
import { IsNotEmpty } from "class-validator"

export class CreatePlanDto {
	
    @IsNotEmpty()
    @Type(() => String)
    name: string;
	
    @IsNotEmpty()
    @Type(() => Number)
    value: Number;
	
    @IsNotEmpty()
    @Type(() => String)
    type: string;
	
    @IsNotEmpty()
    @Type(() => String)
    period: string;
	
    @IsNotEmpty()
    @Type(() => Boolean)
    active: boolean;
}