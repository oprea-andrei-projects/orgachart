import React from "react";
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';

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
    return (
    
        <TreeNode
        label={ <div>
            ID: {id} | Name: {name}
            </div>}
        >	
           
            {children && children.map((child) => <RecursiveComponent key={child.id} {...child} />)}
        </TreeNode>
    );
  };
  
  export default RecursiveComponent;
  