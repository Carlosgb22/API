import Work from "../entities/work";

export default interface database {
    getAllWorks(): Promise<Array<Work>>;
    getWorkById(dni: string, id: number): Promise<Work>;
    addWork(work: Work): Promise<boolean>;
    deleteWork(dni: string, id: number): Promise<boolean>;
    updateWork(work: Work): Promise<boolean>;
}