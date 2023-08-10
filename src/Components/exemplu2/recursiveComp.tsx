import React from "react";
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

import { useDrop } from 'react-dnd';
import { CardProps } from "./card";



export interface RecursiveComponentProps {
    id: number;
    name: string;
    children?: RecursiveComponentProps[];
  }
  

  const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;

const RecursiveComponent: React.FC<RecursiveComponentProps> = ({ id, name, children }) => {
   
    
  const [{isOver}, drop] = useDrop(() => ({
    accept:"card",
    drop: (item:CardProps) => addCardToArr(item),
    collect: (monitor) => ({
        isOver: !!monitor.isOver(),
    })
})) 
   
const addCardToArr = (item: RecursiveComponentProps)=>{

     children?.push(item);
}
   
    return (
    
      <>
      
      <TreeNode
        label={ <div ref = {drop} >
            ID: {id} | Name: {name}
            </div>}
           
            >	
           
            {children && children.map((child) => <RecursiveComponent key={child.id} {...child} />)}
        </TreeNode>
      
      </>
        
    );
  };
  
  export default RecursiveComponent;
  