export interface EncryptInterface {
    hash(value: string | Buffer): Promise<string>;
    check(value: string | Buffer, hash: string): Promise<boolean>;
}