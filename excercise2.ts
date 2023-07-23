/*------------An excercise to familarise with different features of Typescript-----------*/

type PhoneNum = string | number;
//interface for person identity
interface person {
    id: number,
    name: string,
    dateOfBirth ?: Date | string,
}

//interface for contact details of a person
interface personContact {
    phone: PhoneNum,
    email: string,
    website: string
}

//define a type that combines identity and contact details of a person
type personProfile = person & personContact;

//function to return the value of the property in an object
const Person1 : person = {id: 1000, name: "Arsha", dateOfBirth: "24-03-1997"};

function getValue<T, U extends keyof T>(source: T, property: U){
    return source[property]
}

getValue(Person1, "dateOfBirth");
