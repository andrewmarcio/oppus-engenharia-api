import { EncryptInterface } from "src/@core/domain/encrypt/encrypt.interface";
import * as bcrypt from 'bcrypt';

export class Encrypter implements EncryptInterface{
    constructor(
        private readonly saltOrRounds: number = 10
    ) { }

    async hash(value: string | Buffer): Promise<string> {
        return await bcrypt.hash(value, this.saltOrRounds);
    }

    async check(value: string | Buffer, hash: string): Promise<boolean> {
        return await bcrypt.compare(value, hash);
    }
}