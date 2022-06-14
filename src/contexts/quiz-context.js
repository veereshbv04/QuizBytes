import {createContext, useContext, useReducer} from "react";
import { questions } from "../database/quizdata";
import {quizReducer} from "../reducer/quizReducer"
import {useCategory} from "./category-context";
const QuizContext = createContext()
const {category} = useCategory
const contextqset = questions.filter(item => item.id == category)
console.log(category)
const QuizProvider = ({children})=>{
    const initialClickState = ["dkdjj"]
    
    console.log(category)
    const [clickState, dispatch] = useReducer(quizReducer, contextqset,category)
    return <QuizContext.Provider value={{clickState, dispatch}}>{children}</QuizContext.Provider>
}

const useQuiz = ()=>{
    const context = useContext(QuizContext)
    if(!context){
        throw new Error("Quiz Context must be used inside the QuizContext provider")
    }else{
        return context
    }
}

export {QuizProvider, useQuiz}