/** 2018-02-28 -> 28.02.2018 */
export const reformatDate = (date: string) => {
    const dateParts = date.split('-');
    const day = dateParts[2];
    const month = dateParts[1];
    const year = dateParts[0];

    return `${day}.${month}.${year}`;
};
