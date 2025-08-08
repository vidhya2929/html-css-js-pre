const quizdata = [
  {
    question: "what is the capital of France?",
    options: ["Berlin", "Madrid", "paris", "Rome"],
    correct: 2
  },
  {
    question:"Which planet is known as the Red Planet?",
    options:["Venus", "Mars", "Jupiter","Saturn"],
    correct: 1
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool markup Language",
      "Hyper Text Markup Language", 
      "Hyperlink Text Markdown Language"
    ],
    correct: 2
  }
];
const questionEl =document.getElementById("question");
const optionTexts = document.querySelectorAll(".optText");
const options = document.querySelectorAll("")