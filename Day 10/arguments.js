// When and how to use arguments in a function

function getFullName(firstName, lastName) {
    // console.log(arguments);
    // const fullName = firstName + ' ' + lastName;
    let fullName = ' ';
    for(let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        fullName = fullName + ' ' + namePart;
    }
    return fullName;
}

const name = getFullName('Jubayer','Hasan', 'Asif');
console.log(name);




