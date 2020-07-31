// use a variable with an arrow function
const game = () => {
    //will write all code and functions so no global variables - self containing your code
    let pScore = 0;
    let cScore = 0;

    //Start the Game
    //function to fade in  
    //keep the variables where in need in function
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut")
            match.classList.add("fadeIn");
        })
    }

    // Call all the inner functions - organize all small functions at the end
    startGame();
}

// start game function - the big one
game();