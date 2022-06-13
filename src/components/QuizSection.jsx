import {useState} from "react"
import { useCategory } from "../contexts/category-context"
import {questions} from "../database/quizdata"
export default function QuizSection(){

    const {category} = useCategory()
    const questionSet = questions.filter(item => item.id == category)
    console.log(questionSet)
    const categoryquestions = questionSet[0].questions
    console.log(categoryquestions)

    const [currentquestion, setCurrentquestion] = useState(0)

    const handleClick = (isCorrect)=>{
    
        if(currentquestion + 1 < categoryquestions.length){
             setCurrentquestion(currentquestion + 1)
        }else{
            
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