/** Accepts date in YYYY-MM-DD format and turns it to DD.MM.YYYY.
 *  If date has invalid format, returns it unformatted.
 * */
export const reformatDate = (date: string) => {
    if (!date) return date;

    const dateParts = date.split('-');
    if (dateParts.length === 1) return date;

    const day = dateParts[2];
    const month = dateParts[1];
    const year = dateParts[0];

    // Here could be more accurate check for validity, but that wasn't a goal
    const dayIsValid =
        day.length === 2 && Number(day) >= 1 && Number(day) <= 31;
    const monthIsValid =
        month.length === 2 && Number(month) >= 1 && Number(month) <= 12;
    const yearIsValid =
        year.length === 4 && Number(year) >= 0 && Number(year) <= 2023;

    if (!dayIsValid || !monthIsValid || !yearIsValid) return date;
    return `${day}.${month}.${year}`;
};
