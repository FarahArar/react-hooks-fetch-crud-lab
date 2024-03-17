import React from "react";
import { useState, useEffect } from "react";

function QuestionList() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
      })
  }, []);
  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => (
        <li key={question.id}>{question.text}</li>
      ))
        
        
        
        }

      </ul>
    </section>
  );
}

export default QuestionList;
