export interface email{
    user: string,
    date: string,
    userEmail: string,
    recieverEmail: string,
    content: string,
    categories: string[] // [inbox, all, important....etc]
}