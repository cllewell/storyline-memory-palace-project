window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  document.querySelectorAll('input[type="text"]').forEach(function(el) {
    el.setAttribute('autocomplete', 'new-password');
});

}

window.Script2 = function()
{
  // Get player object
var player = GetPlayer();
// Strip All Spaces and Lowercase Tool - handles lowercase and removes all spaces
function stripAll(text) {
    return text.toLowerCase().replace(/\s+/g, '');
}
// Keep One Space and Lowercase Tool - handles lowercase and keeps one space
function keepOne(text) {
    return text.toLowerCase().trim().replace(/\s+/g, ' ');
}
// Convert answers to lowercase
var answer1 = stripAll(player.GetVar("Answer1"));
var answer2 = stripAll(player.GetVar("Answer2"));
var answer3 = keepOne(player.GetVar("Answer3"));
var answer4 = stripAll(player.GetVar("Answer4"));
var answer5 = stripAll(player.GetVar("Answer5"));
var answer6 = stripAll(player.GetVar("Answer6"));
var answer7 = stripAll(player.GetVar("Answer7"));
var answer8 = stripAll(player.GetVar("Answer8"));
var answer9 = stripAll(player.GetVar("Answer9"));
var answer10 = stripAll(player.GetVar("Answer10"));


// Initialize score variable
var score = 0;

// Correct answers (in lowercase)
var correctAnswer1 = "compass";
var correctAnswer2 = "clock";
var correctAnswer3 = "printing press";
var correctAnswer4 = "telescope";
var correctAnswer5 = "battery";
var correctAnswer6 = "refrigerator";
var correctAnswer7 = "phonograph";
var correctAnswer8 = "telephone";
var correctAnswer9 = "lightbulb";
var correctAnswer10 = "automobile";

// Check answers and update score and flag correct answers
if (answer1 === correctAnswer1) {
    score += 1;
    player.SetVar("Correct1", true);
}
if (answer2 === correctAnswer2) {
    score += 1;
    player.SetVar("Correct2", true);
}
if (answer3 === correctAnswer3) {
    score += 1;
    player.SetVar("Correct3", true);
}
if (answer4 === correctAnswer4) {
    score += 1;
    player.SetVar("Correct4", true);
}
if (answer5 === correctAnswer5) {
    score += 1;
    player.SetVar("Correct5", true);
}
if (answer6 === correctAnswer6) {
    score += 1;
    player.SetVar("Correct6", true);
}
if (answer7 === correctAnswer7) {
    score += 1;
    player.SetVar("Correct7", true);
}
if (answer8 === correctAnswer8) {
    score += 1;
    player.SetVar("Correct8", true);
}
if (answer9 === correctAnswer9) {
    score += 1;
    player.SetVar("Correct9", true);
}
if (answer10 === correctAnswer10) {
    score += 1;
    player.SetVar("Correct10", true);
}

// Set the score variable in Storyline
player.SetVar("Score", score);

}

window.Script3 = function()
{
  // Get player object
var player = GetPlayer();

// Strip All Spaces and Lowercase Tool - handles lowercase and removes all spaces
function stripAll(text) {
    return text.toLowerCase().replace(/\s+/g, '');
}
// Keep One Space and Lowercase Tool - handles lowercase and keeps one space
function keepOne(text) {
    return text.toLowerCase().trim().replace(/\s+/g, ' ');
}

// Convert answers to lowercase
var answer1 = keepOne(player.GetVar("Answerone"));
var answer2 = stripAll(player.GetVar("Answertwo"));
var answer3 = keepOne(player.GetVar("Answerthree"));
var answer4 = stripAll(player.GetVar("Answerfour"));
var answer5 = stripAll(player.GetVar("Answerfive"));
var userKeep6 = keepOne(player.GetVar("Answersix"));
var userStrip6 = stripAll(player.GetVar("Answersix"));
var answer7 = keepOne(player.GetVar("Answerseven"));
var answer8 = stripAll(player.GetVar("Answereight"));
var answer9 = stripAll(player.GetVar("Answernine"));
var answer10 = keepOne(player.GetVar("Answerten"));


// Initialize score variable
var score = 0;

// Correct answers (in lowercase)
var correctAnswer1 = "bluetooth speaker";
var correctAnswer2 = "smartphone";
var correctAnswer3 = "fitness tracker";
var correctAnswer4 = "tablet";
var correctAnswer5 = "drone";
correctAnswer6 = ["power bank", "powerbank"];
var correctAnswer7 = "virtual reality headset";
var correctAnswer8 = "smartglasses";
var correctAnswer9 = "smartwatch";
var correctAnswer10 = "bluetooth earbuds";

// Check answers and update score and flag correct answers
if (answer1 === correctAnswer1) {
    score += 1;
    player.SetVar("Correctone", true);
}
if (answer2 === correctAnswer2) {
    score += 1;
    player.SetVar("Correcttwo", true);
}
if (answer3 === correctAnswer3) {
    score += 1;
    player.SetVar("Correctthree", true);
}
if (answer4 === correctAnswer4) {
    score += 1;
    player.SetVar("Correctfour", true);
}
if (answer5 === correctAnswer5) {
    score += 1;
    player.SetVar("Correctfive", true);
}
if (correctAnswer6.includes(userKeep6) || correctAnswer6.includes(userStrip6)) {
    score += 1;
    player.SetVar("Correctsix", true);
}
if (answer7 === correctAnswer7) {
    score += 1;
    player.SetVar("Correctseven", true);
}
if (answer8 === correctAnswer8) {
    score += 1;
    player.SetVar("Correcteight", true);
}
if (answer9 === correctAnswer9) {
    score += 1;
    player.SetVar("Correctnine", true);
}
if (answer10 === correctAnswer10) {
    score += 1;
    player.SetVar("Correctten", true);
}

// Set the score variable in Storyline
player.SetVar("Score", score);

}

window.Script4 = function()
{
  // Get player object
var player = GetPlayer();
// Strip All Spaces and Lowercase Tool - handles lowercase and removes all spaces
function stripAll(text) {
    return text.toLowerCase().replace(/\s+/g, '');
}
// Keep One Space and Lowercase Tool - handles lowercase and keeps one space
function keepOne(text) {
    return text.toLowerCase().trim().replace(/\s+/g, ' ');
}

// Convert answers to lowercase and remove spaces if needed
var answer1 = stripAll(player.GetVar("Ans1"));
var answer2 = stripAll(player.GetVar("Ans2"));
var answer3 = keepOne(player.GetVar("Ans3"));
var answer4 = stripAll(player.GetVar("Ans4"));
var answer5 = stripAll(player.GetVar("Ans5"));
var answer6 = stripAll(player.GetVar("Ans6"));
var answer7 = stripAll(player.GetVar("Ans7"));
var answer8 = stripAll(player.GetVar("Ans8"));
var answer9 = stripAll(player.GetVar("Ans9"));
var answer10 = stripAll(player.GetVar("Ans10"));


// Initialize score variable
var score = 0;

// Correct answers (in lowercase)
var correctAnswer1 = "compass";
var correctAnswer2 = "clock";
var correctAnswer3 = "printing press";
var correctAnswer4 = "telescope";
var correctAnswer5 = "battery";
var correctAnswer6 = "refrigerator";
var correctAnswer7 = "phonograph";
var correctAnswer8 = "telephone";
var correctAnswer9 = "lightbulb";
var correctAnswer10 = "automobile";

// Check answers and update score and flag correct answers
if (answer1 === correctAnswer1) {
    score += 1;
    player.SetVar("Corr1", true);
}
if (answer2 === correctAnswer2) {
    score += 1;
    player.SetVar("Corr2", true);
}
if (answer3 === correctAnswer3) {
    score += 1;
    player.SetVar("Corr3", true);
}
if (answer4 === correctAnswer4) {
    score += 1;
    player.SetVar("Corr4", true);
}
if (answer5 === correctAnswer5) {
    score += 1;
    player.SetVar("Corr5", true);
}
if (answer6 === correctAnswer6) {
    score += 1;
    player.SetVar("Corr6", true);
}
if (answer7 === correctAnswer7) {
    score += 1;
    player.SetVar("Corr7", true);
}
if (answer8 === correctAnswer8) {
    score += 1;
    player.SetVar("Corr8", true);
}
if (answer9 === correctAnswer9) {
    score += 1;
    player.SetVar("Corr9", true);
}
if (answer10 === correctAnswer10) {
    score += 1;
    player.SetVar("Corr10", true);
}

// Set the score variable in Storyline
player.SetVar("Score", score);

}

};
