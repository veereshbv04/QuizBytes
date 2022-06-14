import { useLocation } from "react-router-dom"
import { questions } from "../database/quizdata"
import { useCategory } from "../contexts/category-context"
import {useState} from "react"

export default function ScorePage(){
    const location = useLocation()
    console.log(location)
    const q = location.state.tosend 
    const s = location.state.score
    console.log(s)
   
    const {category} = useCategory()
    console.log(q)
    const questionSet = questions.filter(item => item.id == category)
    const categoryquestions = q
    console.log(categoryquestions)
    // const [score, setScore] = useState(0)
    function optioncolor(options){
        // if(options.hasOwnProperty("userclicked") && options.isCorrect){
        //     setScore(score + 1)
    
        // }
        console.log(options)
        if(options.hasOwnProperty("userclicked") && !options.isCorrect){
            return "red-btn"
        }else if(options.isCorrect){
            return "green-btn"
        }else{
            return "btn"
        }
        
    }

    return (
        <>
        <h2 className="score-text ">You Scored {s}/ {categoryquestions.length}</h2>
        {categoryquestions.map((currentquestion,index) =>(
         <main key={index}>
            
            <section className="quiz-section">
            <div className="question-section">
                 <div className="question-count">
                     <span>Question {index + 1}/</span>{categoryquestions.length}
                 </div>
                 <h2>{categoryquestions[index].questionText}</h2>
            </div>
            <div className="options-section">
                {categoryquestions[index].optionsText.map(options =>(
                    <button key={options.option} onClick={()=>handleClick(options)} className={optioncolor(options)} >{options.option}</button>
                ))}
               
            </div>
            
         </section>
     </main>
        ))}
        </>
       
        
    )
}