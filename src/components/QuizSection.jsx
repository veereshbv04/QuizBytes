import {useState} from "react"
import { useCategory } from "../contexts/category-context"

import {questions} from "../database/quizdata"
import { useNavigate } from "react-router-dom"
export default function QuizSection(){
    const navigate = useNavigate()
    const {category, answerCheckArray} = useCategory()
    const questionSet = questions.filter(item => item.id == category)
    const categoryquestions = questionSet[0].questions

    const [currentquestionno, setCurrentquestionno] = useState(0)
    const [score, setScore] = useState(0)

    const initialdata = JSON.parse(JSON.stringify(categoryquestions))
    const [tosend, ] = useState(initialdata)
    
    
    const handleClick = (isCorrect, curr, index)=>{
        tosend[curr].optionsText[index]["userclicked"]=true
        // tosend[curr].optionsText[index]["userclicked"] = true
        
        if(isCorrect){
            setScore(score + 1) 
        }

        if(currentquestionno + 1 < categoryquestions.length){
             setCurrentquestionno(currentquestionno + 1)
        }else{
        navigate("/scorepage",{state:{tosend,score}})
        }
    }

    return (
        <main>
        <h2>Timer</h2>
         <section className="quiz-section">
            <div className="question-section">
                 <div className="question-count">
                     <span>Question {currentquestionno + 1}/</span>{categoryquestions.length}
                 </div>
                 <h2>{categoryquestions[currentquestionno].questionText}</h2>
            </div>
            <div className="options-section">
                {categoryquestions[currentquestionno].optionsText.map((options, index) =>(
                    <button key={options.option} onClick={()=>handleClick(options.isCorrect,currentquestionno,index)} className="btn">{options.option}</button>
                ))}
               
            </div>
            
         </section>
    </main>
    )
}