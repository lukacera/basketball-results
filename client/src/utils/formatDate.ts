// Format date from isoString to dd.mm.yy format
export const formattedDate = (isoDateString: string) => {
    const date = new Date(isoDateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(2).padStart(2);
    return `${day}.${month}.${year}.`;
};