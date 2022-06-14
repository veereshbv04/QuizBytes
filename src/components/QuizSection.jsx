import {useState} from "react"
import { useCategory } from "../contexts/category-context"

import {questions} from "../database/quizdata"
import { useNavigate } from "react-router-dom"
export default function QuizSection(){
    const navigate = useNavigate()
    const {category, answerCheckArray} = useCategory()
    const questionSet = questions.filter(item => item.id == category)
    console.log(questionSet)
    const categoryquestions = questionSet[0].questions

    const [currentquestion, setCurrentquestion] = useState(0)
    const [score, setScore] = useState(0)
    const ptosend = JSON.parse(JSON.stringify(categoryquestions))
    console.log(ptosend)
    const [tosend, setToSend] = useState(ptosend)
    
    
    const handleClick = (isCorrect, curr, index)=>{
        console.log(curr, index)
        tosend[curr].optionsText[index]["userclicked"]=true
        console.log(tosend)
        console.log("final",tosend)
       
        // tosend[curr].optionsText[index]["userclicked"] = true
        
        if(isCorrect){
            setScore(score + 1)
            answerCheckArray.push(true)
        }else{
            answerCheckArray.push(false)
        }
        if(currentquestion + 1 < categoryquestions.length){
             setCurrentquestion(currentquestion + 1)
        }else{
        navigate("/scorepage",{state:{tosend,score}})
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
                {categoryquestions[currentquestion].optionsText.map((options, index) =>(
                    <button key={options.option} onClick={()=>handleClick(options.isCorrect,currentquestion,index)} className="btn">{options.option}</button>
                ))}
               
            </div>
            
         </section>
    </main>
    )
}