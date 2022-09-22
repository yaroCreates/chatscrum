export const itemsFromBackend = [
    { id: "one", item: "build chatscrum" },
    { id: "two", item: "build trello" },
    { id: "three", item: "go swimming" },
    { id: "four", item: "play Call of Duty" },
    { id: "five", item: "sleep all day" }
]

 export const columnsFromBackend = {
    'column-1': {
        name: 'Weekly Task',
        items: itemsFromBackend
    },
    'column-2': {
        name: 'Daily Task',
        items: []
    }
}