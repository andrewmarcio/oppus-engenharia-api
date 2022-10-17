import { ConfigService } from "@nestjs/config";
import { config } from 'dotenv';
 
config();
 
const configService = new ConfigService();

export const Constants = {
    getJwtSecret(): string {
        return configService.get("JWT_SECRET");
    },
    getJwtExpiresAt(): string {
        return configService.get("JWT_EXPIRES_AT");
    }
}