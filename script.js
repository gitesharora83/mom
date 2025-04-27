// Start the quiz when the button is clicked
document.getElementById('startButton').addEventListener('click', startLoveQuiz);

// Play background music when the play button is clicked
document.getElementById('playMusicButton').addEventListener('click', function() {
    document.getElementById('backgroundMusic').play();
    this.style.display = 'none'; // Hide the play button after playing music
});

function startLoveQuiz() {
    let name1 = document.getElementById('name1').value;
    let name2 = document.getElementById('name2').value;

    if (name1 && name2) {
        // Hide the name input section and show the quiz
        document.getElementById('nameInputContainer').style.display = 'none';
        showHeartAnimation(); // Show falling hearts animation

        // Wait a moment, then start the quiz
        setTimeout(() => {
            startQuiz(name1, name2);
        }, 3000); // Wait for heart animation to finish
    } else {
        alert("Please enter both names!");
    }
}

function showHeartAnimation() {
    let heartContainer = document.getElementById('heartContainer');
    heartContainer.innerHTML = ''; // Clear previous hearts if any

    // Generate multiple falling hearts
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '💖';

        // Randomize the starting horizontal position
        let positionX = Math.random() * window.innerWidth;
        let duration = Math.random() * (8 - 5) + 5; // Random animation duration between 5s to 8s

        heart.style.left = `${positionX}px`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`; // Random delay for each heart's fall
        heartContainer.appendChild(heart);
    }
}

let currentQuestionIndex = 0;
let responses = [];

const questions = [
    "What is one childhood memory of yours that always makes you smile?",
    "If you could relive one day of your life, which day would you choose and why?",
    "What was your dream when you were my age?",
    "What is the most special gift you've ever received (apart from me 😄)?",
    "Who was your childhood hero or inspiration?",
    " What song instantly brings back beautiful memories for you?",
    "What is one thing you wish for in the coming year?",
    "If you could give your younger self one piece of advice, what would it be?",
    "What is the funniest thing I did when I was a baby?",
    "What was the happiest moment of your life (besides the day I was born)?"
];

function startQuiz(name1, name2) {
    let quizContainer = document.getElementById('quizContainer');
    let quizQuestions = document.getElementById('quizQuestions');
    quizContainer.style.display = 'block';
    
    // Personalize the questions based on names
    quizQuestions.innerHTML = `<p>Hello ${name1} and ${name2}! Let's begin the Love Quiz:</p>`;
    showQuestion(name1, name2);
}

function showQuestion(name1, name2) {
    let quizQuestions = document.getElementById('quizQuestions');
    quizQuestions.innerHTML = `<p>${questions[currentQuestionIndex].replace("your partner", name2).replace("your partner's", name2 + "'s")}</p>`;

    document.getElementById('responseInput').value = '';
    document.getElementById('submitResponseButton').onclick = function() { handleResponse(name1, name2); };
}

function handleResponse(name1, name2) {
    let response = document.getElementById('responseInput').value;
    if (response) {
        responses.push(response);
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion(name1, name2);
        } else {
            showFinalMessage(name1, name2);
            startCountdown(); // Start the countdown after the last question
        }
    }
}

function showFinalMessage(name1, name2) {
    let finalMessage = document.getElementById('finalMessage');
    finalMessage.style.display = 'block';
    finalMessage.innerHTML = `
        <p>Mom, you are the first heartbeat I ever heard and the purest love I will ever know — my forever blessing." 💖 💕 ❤</p>
        <p>Here are my promises to you, my mom:</p>
        <ul>
            <li>💖I promise to always respect you and listen to your advice, even when life gets busy., ${name2}.</li>
            <li>💖I promise to celebrate your happiness and be your support in every challenge., ${name2}.</li>
            <li>💖I promise to make time for you, no matter how far or grown-up I become., ${name2}.</li>
            <li>💖I promise to carry your values and kindness with me wherever I go., ${name2}.</li>
            <li>💖I promise to love you unconditionally — today, tomorrow, and forever.

, ${name2}.</li>
        </ul>
    `;
}

function startCountdown() {
    let countdown = document.getElementById('countdown');
    countdown.style.display = 'flex';
    countdown.innerHTML = `
        <p style="font-size: 2rem; margin-bottom: 20px;">
            Get ready to relive the beautiful journey of my sweet mom with me!
        </p>
        <p style="font-size: 1.5rem; margin-top: 20px;">
            Note: Please take a moment to read all the promises written in the background.
        </p>`;
    setTimeout(() => {
        countdown.innerHTML = '<p>10</p>';
        setTimeout(() => {
            countdown.innerHTML = '<p>9</p>';
            setTimeout(() => {
                countdown.innerHTML = '<p>8</p>';
                setTimeout(() => {
                    countdown.innerHTML = '<p>7</p>';
                    setTimeout(() => {
                        countdown.innerHTML = '<p>6</p>';
                        setTimeout(() => {
                            countdown.innerHTML = '<p>5</p>';
                            setTimeout(() => {
                                countdown.innerHTML = '<p>4</p>';
                                setTimeout(() => {
                                    countdown.innerHTML = '<p>3</p>';
                                    setTimeout(() => {
                                        countdown.innerHTML = '<p>2</p>';
                                        setTimeout(() => {
                                            countdown.innerHTML = '<p>1</p>';
                                            setTimeout(() => {
                                                countdown.innerHTML = '<p>The Journey of my sweet mom with me</p>';
                                                setTimeout(() => {
                                                    countdown.style.display = 'none';
                                                    playVideo();
                                                }, 3000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 3000); // Wait 3 seconds before starting the countdown
}

function playVideo() {
    let video = document.getElementById('journeyVideo');
    video.style.display = 'block';
    video.play();
}

// Attempt to play music on page load
window.addEventListener('load', function() {
    let audio = document.getElementById('backgroundMusic');
    let playButton = document.getElementById('playMusicButton');

    // Try to play the audio
    let playPromise = audio.play();

    // If the play promise is rejected, show the play button
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            playButton.style.display = 'block';
        });
    }
});
