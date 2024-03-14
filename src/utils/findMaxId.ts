export default function findMaxId(array: any[]) {
    const idArray = array.map(element => element.id)
    return Math.max(...idArray);
}