import { Link } from "react-router-dom"
import { useCategory } from "../contexts/category-context"

export default function HomePage(){

    const {chooseCategory} = useCategory()

    return (
        <main>
        <div className="quiz-card">
            <img src={process.env.PUBLIC_URL +"/assets/js.png"}/>
            <h2>JavaScript Quizes</h2>
            <Link to="quizsection"><button value={1} onClick={(event)=> chooseCategory(event.target.value)} className="btn">Play Now</button></Link>
        </div>
        <div className="quiz-card">
            <img src={process.env.PUBLIC_URL+"/assets/html.png"} />
            <h2>HTML Quizes</h2>
            <Link to="quizsection"><button value={2} onClick={(event)=> chooseCategory(event.target.value)} className="btn">Play Now</button></Link>
        </div>
        <div className="quiz-card">
            <img src="/logo512.png" />
            <h2>React Quizes</h2>
            <Link to="quizsection"><button value={3} onClick={(event)=> chooseCategory(event.target.value)} className="btn">Play Now</button></Link>
        </div>
        <div className="quiz-card">
            <img src={process.env.PUBLIC_URL+"/assets/science.png"} />
            <h2>Science Quizes</h2>
            <Link to="quizsection"><button value={3} onClick={(event)=> chooseCategory(event.target.value)} className="btn">Play Now</button></Link>
        </div>
        <div className="quiz-card">
            <img src={process.env.PUBLIC_URL+ "/assets/it.jpg"} />
            <h2>React Router Quizes</h2>
            <Link to="quizsection"><button value={3} onClick={(event)=> chooseCategory(event.target.value)} className="btn">Play Now</button></Link>
        </div>
       
    </main>
    )
}