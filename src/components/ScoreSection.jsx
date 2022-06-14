import { useLocation } from "react-router-dom"

export default function ScorePage(){
    const location = useLocation()  
    const score = location.state.score
    const categoryquestions = location.state.tosend

    function optionColor(options){
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
        <h2 className="score-text ">You Scored {score}/ {categoryquestions.length}</h2>
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
                    <button key={options.option} onClick={()=>handleClick(options)} className={optionColor(options)} >{options.option}</button>
                ))}
               
            </div>
            
         </section>
     </main>
        ))}
        </>

    )
}