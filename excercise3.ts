/*--------Excercise to familarize alternatives to using "any" type------------*/
function query<T>(
    items: T[],
    //1.query:any --> allow access to any type
    //2.query: Record<keyof T, (val: T[keyof T]) => boolean> --> both name and age will have string | number
    query: {
        [TProp in keyof T]?: (val: T[TProp]) => boolean 
    } //3. age will have number and name will have string types respectively
){
    return items.filter(item => {
        for (const property of Object.keys(item)) {
            const propertyQuery = query[property];

            if(propertyQuery && propertyQuery(item[property])) {
                return true;
            }
        }

        return false;
    })
}

const matches = query([
    {name: "Arsha", age: 26},
    {name: "Harsha", age: 22}
], {
    name: name => name === "Harsha",
    age: age => age === 21
});