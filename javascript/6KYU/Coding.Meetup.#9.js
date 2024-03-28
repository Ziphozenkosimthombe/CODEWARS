/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
your function should return true as there is at least one developer from each age group.

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer up to 199.




This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.
*/


const isAgeDiverse = (list) => {
    let groupAges = {
        teens: false,
        twenties: false,
        thirties: false,
        forties: false,
        fifties: false,
        sixties: false,
        seventies: false,
        eighties: false,
        nineties: false,
        centenarian: false
    
    };

    for (const developer of list) {
        const age = developer.age;
        if (age >= 10 && age < 20) {
          ageGroups.teens = true;
        } else if (age >= 20 && age < 30) {
          ageGroups.twenties = true;
        } else if (age >= 30 && age < 40) {
          ageGroups.thirties = true;
        } else if (age >= 40 && age < 50) {
          ageGroups.forties = true;
        } else if (age >= 50 && age < 60) {
          ageGroups.fifties = true;
        } else if (age >= 60 && age < 70) {
          ageGroups.sixties = true;
        } else if (age >= 70 && age < 80) {
          ageGroups.seventies = true;
        } else if (age >= 80 && age < 90) {
          ageGroups.eighties = true;
        } else if (age >= 90 && age < 100) {
          ageGroups.nineties = true;
        } else if (age >= 100) {
          ageGroups.centenarian = true;
        }
      }

        return Object.values(ageGroups).every((value) => value);
}

//Another solution
function isAgeDiverse2(list) {
    const ageList = list.map(x => x.age)
    if(
      ageList.some(x =>(x>=0&&x<20)) &&
      ageList.some(x =>(x>=20&&x<30)) &&
      ageList.some(x =>(x>=30&&x<40)) &&
      ageList.some(x =>(x>=40&&x<50)) &&
      ageList.some(x =>(x>=50&&x<60)) &&
      ageList.some(x =>(x>=60&&x<70)) &&
      ageList.some(x =>(x>=70&&x<80)) &&
      ageList.some(x =>(x>=80&&x<90)) &&
      ageList.some(x =>(x>=90&&x<100)) &&
      ageList.some(x =>(x>=100&&x<200))
    ){
      return true
    } else {
      return false
    }
  }