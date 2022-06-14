import { Link, useNavigate } from "react-router-dom"

export default function RulesCard(){
    const navigate = useNavigate()
    return (
        <main className="col-flex">
            <h1>Please follow the below Instructions</h1>
            <div>
                <h2>1. Each Question weights 1 Points</h2>
                <h2>2. No negative markings</h2>
                <h2>3. You will be given one question and 4 options</h2>
                <h2>4. As soon as you click on any option you will be moved to next question</h2>
                <h2>5. You cannot revisit the questions twice</h2>
               
            </div>
           
             <button className="btn" onClick={()=>navigate("/quizsection")}>Start</button>
        </main>
    )
}