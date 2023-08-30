import { useState, type CSSProperties, type FC } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import RecursiveComponentProps from './recursiveComp';

const style: CSSProperties = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
  }

export interface CardProps {
   
    id:number,
    name: string

    
  }



export const Card :React.FC<CardProps> = (({id, name}) =>{

  const [children, setChildren] = useState([]);

  const [{isDragging}, drag] = useDrag(()=>({
    type:"card",
    item: {id:id},
    collect:(monitor) =>({

        isDragging: !!monitor.isDragging(),
    }),

  }));

  const [{isOver}, drop] = useDrop(() => ({
    accept:"card",
    drop: (item:CardProps) => alert(item.name + " dropped !!!"),
    collect: (monitor) => ({
        isOver: !!monitor.isOver(),
    })
  })) 

  let deleteItemFromArr = (item:CardProps, arr: typeof RecursiveComponentProps[]) =>{

     let newArr =  arr.filter((e:any) => e.id != item.id);

    // setChildren(newArr);

  }

  return(

    
    <div   
    ref={node => {drag(drop(node))}}
    style={{ border:"1px solid black", width:"200px"}} 
    
    
    >
            ID: {id} | Name: {name}
    </div>
    
    
  )

});


