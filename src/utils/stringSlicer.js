export default function stringSlicer(title, limit = 10) {
    if (title !== "") {
        const lastSpace = title.substring(0, limit).lastIndexOf(" ");
        const limitedTitle = title.substring(0, lastSpace);
        return limitedTitle;
    }
    return "Title is empty";
}