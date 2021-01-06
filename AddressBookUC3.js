var prompt = require('prompt-sync')();
const NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}$');
const ADDRESS_REGEX = RegExp('^[a-zA-Z]{4,}$');
const ZIP_REGEX = RegExp('^[0-9]{6}$');
const PHONE_NUMBER_REGEX = RegExp('^[+]?[0-9]{2}[ ][0-9]{10}$'); 
const EMAIL_REGEX = RegExp('^[a-zA-Z][a-zA-Z0-9]*([.+-][a-zA-Z0-9]+)*(@[a-zA-Z0-9]+[.][a-zA-Z0-9]{2,})([.][a-zA-Z]{2,4})?$');
let contactBookArray = new Array();
class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        if(!NAME_REGEX.test(firstName)) throw 'Please enter valid firstname.'
        { 
            this.firstName = firstName;
        }
        if(!NAME_REGEX.test(lastName)) throw 'Please enter valid lastname.'
        {
            this.lastName = lastName;
        }
        if(!ADDRESS_REGEX.test(address))throw 'Please enter valid address.'
        {
            this.address = address;
        }
        if(!ADDRESS_REGEX.test(city)) throw 'Please enter valid city.'
        {
            this.city = city;
        }
        if(!ADDRESS_REGEX.test(state)) throw 'Please enter valid state.'
        {
            this.state = state;
        }
        if(!ZIP_REGEX.test(zip)) throw 'Please enter valid pincode.'
        {
            this.zip = zip;
        }
        if(!PHONE_NUMBER_REGEX.test(phoneNumber)) throw 'Please enter valid phone number.'
        {
            this.phoneNumber = phoneNumber;
        }
        if(!EMAIL_REGEX.test(email)) throw 'Please enter valid email ID.'
        {
            this.email = email;
        }
    }
    toString() {
        return "First name: " + this.firstName + "\nLast name: " + this.lastName + "\nAddress: " + this.address + "\nCity: " +
         this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone number: " + this.phoneNumber + "\nEmail: " + this.email;
    }
}
function addContact(){
    let firstName = prompt("Enter Firstname: ");
    let lastName = prompt("Enter Lastname: ");
    let address = prompt("Enter Address: ");
    let city = prompt("Enter City name: ");
    let state = prompt("Enter State name: ");
    let zip = prompt("Enter pincode: ");
    let phoneNumber = prompt("Enter Phone number: ");
    let emailId = prompt("Enter email id: ");
    try{
        let contact = new Contact(firstName,lastName,address,city,state,zip,phoneNumber,emailId);
        contactBookArray.push(contact);
    }catch(Exception){
        console.log(Exception);
    }
}
addContact();