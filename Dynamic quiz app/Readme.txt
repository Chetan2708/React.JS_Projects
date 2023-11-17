**Assignment: Dynamic Quiz Application**

**Objective:**
Develop a simple dynamic quiz application using HTML, CSS, and JavaScript (vanilla JS or any preferred framework/library like React). The application should load questions from a local JSON file, present them one at a time to the user, and finally display the user's score at the end.

**Functional Requirements:**

1. **Quiz Data Structure**: The quiz questions should be stored in a JSON file with the format containing the question text, a set of multiple-choice answers, and the correct answer.

```json
[
  {
    "question": "What is the capital of France?",
    "options": ["New York", "London", "Paris", "Dublin"],
    "answer": "Paris"
  },
  {
    "question": "Who painted the Mona Lisa?",
    "options": ["Vincent Van Gogh", "Pablo Picasso", "Leonardo Da Vinci", "Claude Monet"],
    "answer": "Leonardo Da Vinci"
  }
  // more questions...
]
```

2. **Dynamic Question Rendering**: Load and display one question at a time and cycle through the questions as the user answers them.

3. **Answer Selection**: Allow the user to select an answer and submit it to move to the next question.

4. **Score Calculation**: Keep track of the correct answers and calculate the score once the quiz is complete.

5. **Results Display**: At the end of the quiz, display the user's score with a personalized message.

6. **Styling**: The application should be well-styled and presentable, but keep the styling simple and focus on functionality.


**Bonus Challenges:**

- Randomize the order of questions each time the quiz is started.
- Implement a timer per question and a total time taken to complete the quiz.
- Add a progress bar indicating how many questions have been answered.
 