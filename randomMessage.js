//Random Number
const randomNumber = () => Math.floor(Math.random() * 5);

//Arrays
const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const muscleGroup = ['Chest', 'Legs', 'Arms', 'Shoulders', 'Core'];

//Function
const randomMessage = (trainingDay) =>{
    switch (trainingDay){
        case 0:
            return `On ${day[0]} you should train `
            break;
        case 1:
            return `On ${day[1]} you should train `
            break;
        case 2:
            return `On ${day[2]} you should train `
            break;
        case 3:
            return `On ${day[3]} you should train `
            break;
        case 4:
            return `On ${day[4]} you should train `
            break;
    }
}

const randomMuscle = (muscle) =>{
    return muscleGroup[randomNumber()]
}

console.log(randomMuscle())