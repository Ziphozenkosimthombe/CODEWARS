/*

DESCRIPTION:
You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}
As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

Notes:

Each student will have a unique name
There will always be a clear winner: either one person has the most, or everyone has the same amount
If there is only one student, then that student has the most money


*/ 


class Student {
    constructor(name, fives, tens, twenties){
        this.name = name;
        this.fives = fives;
        this.tens = tens;
        this.twenties = twenties
    }
}

function mostMoney(student){
    let total = student.map(s => s.fives * 5 + s.tens * 10 + s.twenties * 20);
    let max = Math.max(...total);
    let index = total.indexOf(max);
    return total.every(t => t === max) ? 'all' : student[index].name;
}

//another solution

function mostMoney(students) { 
    let max = students.map(s => s.fives * 5 + s.tens * 10 + s.twenties * 20).reduce((a, b) => Math.max(a, b), 0);
    let richest = students.filter(s => s.fives * 5 + s.tens * 10 + s.twenties * 20 == max);
    return richest.length == students.length ? 'all' : richest[0].name;
}