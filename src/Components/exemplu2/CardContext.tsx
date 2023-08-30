import React from "react";
import { createContext, useState } from "react";
import RecursiveComponent, { RecursiveComponentProps } from "./recursiveComp";

export const ContextCard = createContext<RecursiveComponentProps | null>(null);
type Props = {
    children?: React.ReactNode;
}
const CardProvider:React.FC<Props> = ({children}) =>{

    const [card, setCard] = useState<RecursiveComponent>({

        id:0,
        name:"",
        children:[]
    }) 

    return(
        
        <ContextCard.Provider value={card, setCard}> {children} </ContextCard.Provider>
    )

}
export default CardProvider;