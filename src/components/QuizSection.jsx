import { useCategory } from "../contexts/category-context"

export default function QuizSection(){

    const {category} = useCategory()
    console.log(category)

    return (
        <main>
        <h2>gg</h2>
         <section className="quiz-section">
            <div className="question-section">
                 <div className="question-count">
                     <span>Question 2/</span>5
                 </div>
                 <h2>who is the prime minsiter of India</h2>
            </div>
            <div className="options-section">
                <button className="btn"><a href="./score.html">Narendra Modi</a></button>
                <button className="btn">Narendra Modi</button>
                <button className="btn">Narendra Modi</button>
                <button className="btn">Narendra Modi</button>
            </div>
            
         </section>
    </main>
    )
}