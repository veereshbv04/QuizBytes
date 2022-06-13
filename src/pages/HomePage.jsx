import { Link } from "react-router-dom"

export default function HomePage(){
    return (
        <main>
        <div class="quiz-card">
            <img src="/theme.jpg"/>
            <h2>JavaScript Quizes</h2>
            <Link to="quizsection"><button value={"k"} class="btn">Play Now</button></Link>
        </div>
        <div class="quiz-card">
            <img src="/theme.jpg" />
            <h2>JavaScript Quizes</h2>
            <Link to="quizsection"><button class="btn">Play Now</button></Link>
        </div>
        <div class="quiz-card">
            <img src="/theme.jpg" />
            <h2>JavaScript Quizes</h2>
            <Link to="quizsection"><button class="btn">Play Now</button></Link>
        </div>
       
    </main>
    )
}