let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
const NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}$');
const ADDRESS_REGEX = RegExp('^[a-zA-Z]{4,}$');
const ZIP_REGEX = RegExp('^[0-9]{6}$');
const PHONE_NUMBER_REGEX = RegExp('^[+]?[0-9]{2}[ ][0-9]{10}$'); 
const EMAIL_REGEX=RegExp('^[a-zA-Z][a-zA-Z0-9]*([.+-][a-zA-Z0-9]+)*(@[a-zA-Z0-9]+[.][a-zA-Z0-9]{2,})([.][a-zA-Z]{2,4})?$');

class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}
function validateFirstName(firstName) {
    if (!NAME_REGEX.test(firstName)) {
        console.log('Please enter first name in valid format.');
        return false;
    }
    else
    console.log('Valid First Name')
}
function validateLastName(lastName) {
    if (!NAME_REGEX.test(lastName)) {
        console.log('Please enter last name in valid format.');
        return false;
    }
}
function validateAddress(address) {
    if (!ADDRESS_REGEX.test(address)) {
        console.log('Please enter address in valid format.');
        return false;
    }
}
function validateCity(city) {
    if (!ADDRESS_REGEX.test(city)) {
        console.log('Please enter city in valid format.');
        return false;
    }
}
function validateState(state) {
    if (!ADDRESS_REGEX.test(state)) {
        console.log('Please enter state in valid format.');
        return false;
    }
}
function validateZIP(zip) {
    if (!ZIP_REGEX.test(zip)) {
        console.log('Please enter zip in valid format.');
        return false;
    }
}
function validatePhoneNumber(phoneNumber) {
    if (!PHONE_NUMBER_REGEX.test(phoneNumber)) {
        console.log('Please enter phone number in valid format.');
        return false;
    }
}
function validateEmail(email) {
    if (!EMAIL_REGEX.test(email)) {
        console.log('Please enter email in valid format.');
        return false;
    }
}
prompts.question('enter the firstName',(firstName) => {
validateFirstName(firstName);
});
prompts.question('enter the lastName',(lastName) => {
validateLastName(lastName);
});
prompts.question('enter the address',(address) => {
validateAddress(address);
});
prompts.question('enter the city',(city) => {
validateCity(city);
});
prompts.question('enter the State',(state) => {
validateState(state);
});
prompts.question('enter the zip code',(zip) => {
validateZIP(zip);
});
prompts.question('enter the phone number',(phoneNumber) => {
validatePhoneNumber(phoneNumber);
});
prompts.question('enter the Email',(email) => {
validateEmail(email);
prompts.close()
});