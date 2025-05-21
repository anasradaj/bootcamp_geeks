// Exercise 1 : Checking the BMI


const person1 = {
    fullName: "John Doe",
    mass: 60, 
    height: 1.75, 
    calculateBMI: function () {
        return this.mass / (this.height ** 2);
    }
};

const person2 = {
    fullName: "Jane Smith",
    mass: 90, 
    height: 1.82, 
    calculateBMI: function () {
        return this.mass / (this.height ** 2);
    }
};


function compareBMI(personA, personB) {
    const bmiA = personA.calculateBMI();
    const bmiB = personB.calculateBMI();

    console.log(`${personA.fullName}'s BMI: ${bmiA.toFixed(2)}`);
    console.log(`${personB.fullName}'s BMI: ${bmiB.toFixed(2)}`);

    if (bmiA > bmiB) {
        console.log(`${personA.fullName} has the larger BMI (${bmiA.toFixed(2)})`);
    } else if (bmiB > bmiA) {
        console.log(`${personB.fullName} has the larger BMI (${bmiB.toFixed(2)})`);
    } else {
        console.log(`Both ${personA.fullName} and ${personB.fullName} have the same BMI (${bmiA.toFixed(2)})`);
    }
}

compareBMI(person1, person2);

// Exercise 2 : Grade Average


function calculateAverage(gradesList) {
    const sum = gradesList.reduce((acc, grade) => acc + grade, 0);
    return sum / gradesList.length;
}

function findAvg(gradesList) {
    const average = calculateAverage(gradesList);
    console.log(`Average grade: ${average.toFixed(2)}`);

    if (average > 65) {
        console.log("You passed!");
    } else {
        console.log("You failed and must repeat the course.");
    }
}


const grade = [60, 20, 80, 90];
findAvg(grade);
