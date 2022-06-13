import { createContext, useContext, useState } from "react";

const CategoryContext = createContext("g")

const CategoryProvider = ({children})=>{

    const [category, setCategory] = useState("e")
    
    const chooseCategory= (category)=>{
        setCategory(category)
    }

    return <CategoryContext.Provider value={{category,chooseCategory} }>{children}</CategoryContext.Provider>
}

const useCategory = ()=>{
    const context = useContext(CategoryContext)
    if(!context){
        throw new Error("category Context must be used inside category provider")
    }else{
        return context
    }
}

export {CategoryProvider, useCategory}