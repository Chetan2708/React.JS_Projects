import { useEffect, useState } from "react";
import "./app.css";
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const questions = [
  {
    question:
      "A flashing red traffic light signifies that a driver should do what?",
    A: "stop",
    B: "speed up",
    C: "proceed with caution",
    D: "honk the horn",
    answer: "A"
  },
  {
    question: "A knish is traditionally stuffed with what filling?",
    A: "potato",
    B: "creamed corn",
    C: "lemon custard",
    D: "raspberry jelly",
    answer: "A"
  },
  {
    question: "A pita is a type of what?",
    A: "fresh fruit",
    B: "flat bread",
    C: "French tart",
    D: "friend bean dip",
    answer: "B"
  },
  {
    question:
      "A portrait that comically exaggerates a person's physical traits is called a what?",
    A: "landscape",
    B: "caricature",
    C: "still life",
    D: "Impressionism",
    answer: "B"
  },
  {
    question: "A second-year college student is usually called a what?",
    A: "sophomore",
    B: "senior",
    C: "freshman ",
    D: "junior ",
    answer: "A"
  },
  {
    question:
      "A student who earns a J.D. can begin his or her career as a what?",
    A: "lawyer",
    B: "bricklayer",
    C: "doctor",
    D: "accountant",
    answer: "A"
  },
  {
    question: "A triptych is a work of art that is painted on how many panels?",
    A: "two",
    B: "three",
    C: "five",
    D: "eight",
    answer: "B"
  },
  {
    question:
      "According to a famous line from the existentialist play 'No Exit' what is hell?",
    A: "oneself",
    B: "other people",
    C: "little made large",
    D: "hued in green and blue",
    answer: "B"
  },
  {
    question:
      "According to a popular slogan, what state should people not 'mess with'?",
    A: "New York",
    B: "Texas",
    C: "Montana",
    D: "Rhode Island",
    answer: "B"
  },
  {
    question:
      "According to a Yale University study, what smell is the most recognizable to American adults?",
    A: "tuna",
    B: "laundry",
    C: "popcorn",
    D: "coffee",
    answer: "D"
  }
];

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // Initial time per question
  const [quizStarted, setQuizStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setTimeLeft(10); // Reset the timer for the next question

    setProgress(((currentQuestionIndex + 1) / questions.length) * 100);
  };

  useEffect(() => {
    if (quizStarted && currentQuestionIndex < questions.length) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            handleNext();
            return 10;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentQuestionIndex, quizStarted]);

  useEffect(() => {
    if (quizStarted) {
      setCurrentQuestionIndex(0);
      setScore(0);
      setTimeLeft(10);
      shuffleArray(questions);
    }
  }, [quizStarted]);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="container">
      {!quizStarted ? (
        <div>
          <h1>Welcome to the Quiz!</h1>
          <button onClick={startQuiz}>Start</button>
        </div>
      ) : (
        <div>
          {currentQuestionIndex < questions.length ? (
            <div>
              <h1>Question {currentQuestionIndex + 1}</h1>
              <p>{questions[currentQuestionIndex].question}</p>

              <div className="options">
                {["A", "B", "C", "D"].map((option) => (
                  <div key={option}>
                    <input
                      type="radio"
                      id={option}
                      value={option}
                      checked={selectedAnswer === option}
                      onChange={() => {
                        handleOptionSelect(option);
                      }}
                    />
                    <label htmlFor={option}>
                      {questions[currentQuestionIndex][option]}
                    </label>
                  </div>
                ))}
              </div>

              <p>Time Left: {timeLeft} seconds</p>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: `${
                      ((currentQuestionIndex + 1) / questions.length) * 100
                    }%`
                  }}
                />
              </div>

              <button onClick={handleNext}>Next</button>
            </div>
          ) : (
            <div>
              <h1>Quiz Complete</h1>
              {score === questions.length ? (
                <p>Wow! You scored full marks!</p>
              ) : (
                <p>
                  Your Score is {score} out of {questions.length}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
