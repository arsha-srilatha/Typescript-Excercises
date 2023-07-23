/*------------------An excercise to practice Typescript-------------*/
//An example of interface
interface toDoItems {
    id: number,
    title: string,
    completedOn ?: Date,
    status: Status
}

//An example of enum
enum Status {
    todo = "To do",
    inprogress = "In Progress",
    done = "Done"
}

/*-------type Status = "To Do" | "In progress" | "Done" --> alternative to enum using type-------*/

//Initial array of to-do list
const list: toDoItems[] = [
    { id: 1, title: "Complete CSS Course", status: Status.inprogress},
    { id: 2, title: "Complete JS Course", status: Status.inprogress},
    { id: 3, title: "Complete HTML Course", completedOn: new Date("10-07-2023"), status: Status.done}
];

//function to add new item to the toDoItems[]
function addNew(newTitle : string): toDoItems {
    const newid: number = getNewId(list);

    const newItem: toDoItems = {
        id : newid,
        title : newTitle,
        status : Status.todo
    }

    list.push(newItem);

    return newItem

}

//function to assign a new id to the newly added item in the toDoItems[]
function getNewId<T extends {id: number}>(todolist: T[]) : number{
    return todolist.reduce((max, x) =>x.id> max? max: x.id, 0) + 1;
}

const newList = addNew("Complete TS Course");
console.log (newList);


