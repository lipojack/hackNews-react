import React from 'react';
import Button from './Button'
const Table = ({list, searchTerm, removeItem}) =>{
    return(
      <div className='col-sm-10 col-sm-offset-1'>
        {
          // Don't use index as key : https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
          // list.filter( isSearched(searchTerm) ).map((item)=>
          list.map((item)=>
              <div key={item.objectID}>
                <h2><a href ={item.url}>{item.title}</a></h2>
                <h4>
                  
                  { item.author } | {item.num_comments} comments | {item.points} points
                  
                  <Button
                    className = 'btn btn-danger btn-xs'
                    type = 'button'
                    onClick = {()=>removeItem(item.objectID)}>
                    Remove
                  </Button>
                
                </h4><hr/>
              </div>
          )
        }
      </div>  
    )
  }

export default Table;