import React from 'react';
import MyComponent  from '../Data/node';
import { Tree, TreeNode } from 'react-organizational-chart';
import { Person } from '../models/person';
import styled from 'styled-components';


const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;

interface TreeNodeProps {
   
    data?:Person;
    leftChild?: Person;
    rightChild?: Person;
  }
  
  const MyTreeNode: React.FC<TreeNodeProps> = ({ data, leftChild, rightChild }) => {
    return (
     
    
      <TreeNode label={<StyledNode>Grand Child</StyledNode>}>

        {
              leftChild && (<MyTreeNode    />)
              
            
        }
        
      
      </TreeNode>

        
    );
  };
  
  export default MyTreeNode;