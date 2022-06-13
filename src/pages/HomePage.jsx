import { Link } from "react-router-dom"
import { useCategory } from "../contexts/category-context"

export default function HomePage(){

    const {chooseCategory} = useCategory()

    return (
        <main>
        <div className="quiz-card">
            <img src="/theme.jpg"/>
            <h2>JavaScript Quizes</h2>
            <Link to="quizsection"><button value={1} onClick={(event)=> chooseCategory(event.target.value)} className="btn">Play Now</button></Link>
        </div>
        <div className="quiz-card">
            <img src="/theme.jpg" />
            <h2>JavaScript Quizes</h2>
            <Link to="quizsection"><button value={2} onClick={(event)=> chooseCategory(event.target.value)} className="btn">Play Now</button></Link>
        </div>
        <div className="quiz-card">
            <img src="/theme.jpg" />
            <h2>JavaScript Quizes</h2>
            <Link to="quizsection"><button value={3} onClick={(event)=> chooseCategory(event.target.value)} className="btn">Play Now</button></Link>
        </div>
       
    </main>
    )
}