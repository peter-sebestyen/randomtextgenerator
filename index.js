//Tips and Tricks
const tip1 = 'Your water intake in a day should be 1 liter for 25kg bodyweight.'
const tip2 = 'For optimal gains, you should train a mouscle group twice a week.'
const tip3 = 'Protein intake per Meal should be around 30g.'

//Message randomizer
const randomizer = () => Math.floor(Math.random() * 3)

//Logging Tips
const randomTip = tipNumber => {
    switch (tipNumber){
        case 0:
            return tip1;
            break;
        case 1:
            return tip2;
            break;
        case 2:
            return tip3;
            break;
    }
}

console.log(randomTip(randomizer()))