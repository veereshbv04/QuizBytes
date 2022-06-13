import { questions } from "../database/quizdata"
import { useCategory } from "../contexts/category-context"

export default function ScorePage(){
    const {category} = useCategory()
    const questionSet = questions.filter(item => item.id == category)
    console.log(category)
    const categoryquestions = questionSet[0].questions
    console.log(categoryquestions)

    function optioncolor(isCorrect){
        if(isCorrect){
            return "green-btn"
        }else{
            return "red-btn"
        }
    }

    return (
        <>
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
                    <button key={options.option} onClick={()=>handleClick(options.isCorrect)} className={optioncolor(options.isCorrect)} >{options.option}</button>
                ))}
               
            </div>
            
         </section>
     </main>
        ))}
        </>
       
        
    )
}