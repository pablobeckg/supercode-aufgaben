const firstName: string = 'Pablo';
const lastName: string = 'Beck';

const firstNameLength: number = firstName.length;
const lastNameLength: number = lastName.length;
console.log({firstNameLength});
console.log({lastNameLength});

const fullName: string = firstName.concat(` ${lastName}`);
console.log(fullName);

const fullNameLength: number = fullName.length;
console.log(fullNameLength);

