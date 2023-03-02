export default interface Event {
    id: number;
    date: Date;
    phone_1: number;
    phone_2: number | null;
    place_name: string;
}