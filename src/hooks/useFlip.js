import { useState } from "react";


const useFlip = (initialState = true) => {
    const [bool, setBool] = useState(initialState)
    const toggle = () => {
        setBool(b => !b)
    }
    return [bool, toggle]
}

export default useFlip