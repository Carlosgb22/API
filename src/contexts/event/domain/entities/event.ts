export default interface Event {
    ID: number
    Id_Catering: number
    Date: Date
    Phone_1: number
    Phone_2: number | null
    Place_Name: string
    Assembly_Hours: string
    Service_Hours: string
    OpenBar_Hours: string
    revised: number
}