











/* ---- Game Structure ----
10 questions - All Christmas themed

1. Press Start to start quiz (on click event)
    - hide start div on click, show question div
2. Display question and answers
    - after start (on click), append object.question into question div and object.answer into answer div
    - do :hover css (background, border color, etc) when answering.
    - pressing correct answer should give us "correct" and display image (.html)
        - 5 sec and switch to next question
    - pressing incorrect answer/no user input should give us "wrong" and show correct answer/image (.html)
        - 5 sec and switch to next question
3. Timer counts down on each question (go with ~15 seconds)
    - applies to one question, not entire game
4. At the end (after 10 questions):
    - clear timeout (timer) and hide
    - show # correct,incorrect, and unanswered answers
    - game reset button
*/