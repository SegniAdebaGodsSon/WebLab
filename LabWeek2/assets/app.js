
/* // You can check this Variables are Available or not under the window object
var firstName; 
var lastName; 
var age; 
var job;
// Receive the values from input 
firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");
job = prompt("What is Your Profession ?")
age = prompt("Enter Your Age");
// Display  the result on console from input 
console.info("Here is your Profile ")
console.log("Full Name: " + firstName + " "+lastName);
console.log("Profession : " + job);
console.log("Age : " + age + " " + "years old");
 */


/* var birthYear;

birthYear = prompt('Enter the year of your birth: ');
let tempAge = ageCalc(birthYear);
console.log('Age: ' + tempAge, ' years old');

function ageCalc(birthYear){
    console.log(birthYear)
    return new Date().getFullYear() - birthYear;
} */

/* 
let personProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",
    ageCalc: function() { return this.age = new Date().getFullYear() - this.birthYear; },
    checkVote: function() {
        let tempAge = this.ageCalc();
        this.isEligibleToVote =(tempAge >= 18) ? true : false;
    },
    calcBmi: function() {
        console.log(this)
    },

    // rand: () => {
    //     console.log(this)
    // }
};


personProfile.firstName = prompt("Enter Your First Name");
personProfile.lastName = prompt("Enter Your Last Name");
personProfile.job = prompt("What is Your Profession ?");
personProfile.birthYear = prompt("Enter Your Birth Date");
personProfile.weight = prompt("Your Weight in Kg  ? ");
personProfile.height = prompt("Your Height in M  ? ");
let numberOfFamily = prompt("Number of Family  ? ");


//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    personProfile.familyMembers[i] = prompt("Your Family  Members " + (i + 1));
}

// call age and check vote fun
personProfile.ageCalc();
personProfile.checkVote();


// Adding Self Invoking Function Expression 

// Adding Self Invoking Function Expression 
(function() {

    console.log("**************************************************************")
    console.log("Here is your Profile ")
    console.log("Full Name: " + personProfile.firstName + " " + personProfile.lastName);
    console.log("Profession : " + personProfile.job);
    console.log("Age : " + personProfile.age + " " + "years old");
    console.log("Is Eligible to Vote : " + personProfile.isEligibleToVote);
    console.log("Family Members ");
    //Displaying the family member with foreach
    personProfile.familyMembers.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });
    // call bmi calculator 
    personProfile.calcBmi();
    console.log("**************************************************************")

})();
 */