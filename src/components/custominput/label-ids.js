export let id = -1;

export function newId() {
    console.log(id)
    id += 1;
    return id;
}