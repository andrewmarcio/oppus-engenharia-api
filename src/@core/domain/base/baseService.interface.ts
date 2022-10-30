export interface BaseServiceInterface<T> {
    findAll(): Promise<T[]>;
    findOne(id: number): Promise<T>;
    create(payload: T): Promise<T>;
    update(id: number, payload: any): Promise<T>;
    remove(id: number): Promise<void>;
}