import React from 'react'

function List(props) {
    const listitems = props.items.map((item)=>{
        <li key={item}>{item}</li>
    })

    return <ul>{listitems}</ul>;
  
}


export default List