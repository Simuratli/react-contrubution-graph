export const formatDate = (date:Date) => {
    const day = String(date.getDate()).padStart(2,'0')
    const month = String(date.getMonth() + 1).padStart(2,'0')
    return `${date.getFullYear()}-${month}-${day}`
}


export const getDateRange = (start:Date,end:Date) => {
    const result:string[] = [];
    const current = new Date(start);
    while(current <= end){
        result.push(formatDate(current))
        current.setDate(current.getDate() + 1);
    }

    return result
}