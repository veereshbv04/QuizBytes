import {useState} from "react"
import { useCategory } from "../contexts/category-context"
import {questions} from "../database/quizdata"
import { useNavigate } from "react-router-dom"
import ScorePage from "./ScorePage"
export default function QuizSection(){
    const navigate = useNavigate()
    const {category, answerCheckArray} = useCategory()
    const questionSet = questions.filter(item => item.id == category)
    console.log(questionSet)
    const categoryquestions = questionSet[0].questions
    console.log("ddd")
    const tosend = JSON.parse(JSON.stringify(categoryquestions))
    console.log(tosend)

    const [currentquestion, setCurrentquestion] = useState(0)
    
    const handleClick = (isCorrect)=>{
        if(isCorrect){
            answerCheckArray.push(true)
        }else{
            answerCheckArray.push(false)
        }
        if(currentquestion + 1 < categoryquestions.length){
             setCurrentquestion(currentquestion + 1)
        }else{
            navigate("/scorepage")
        }
    }

    return (
        <main>
        <h2>gg</h2>
         <section className="quiz-section">
            <div className="question-section">
                 <div className="question-count">
                     <span>Question {currentquestion + 1}/</span>{categoryquestions.length}
                 </div>
                 <h2>{categoryquestions[currentquestion].questionText}</h2>
            </div>
            <div className="options-section">
                {categoryquestions[currentquestion].optionsText.map(options =>(
                    <button key={options.option} onClick={()=>handleClick(options.isCorrect)} className="btn">{options.option}</button>
                ))}
               
            </div>
            
         </section>
    </main>
    )
}