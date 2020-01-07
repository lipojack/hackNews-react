import React from 'react'
import { FormGroup } from 'react-bootstrap'
import Button from './Button'

const Search = ({onChange, value, children, onSubmit}) =>{
    return(
      <form onSubmit = { onSubmit }>
        <FormGroup>
          <h1 style={{color:'#F96D00'}}>{children}</h1>
          <hr style={{color:'#000000', width:'100px'}}/>
          
          <div className = 'input-group'>
            
            <input
              className = 'form-control width100 searchForm'
              type = 'text' 
              onChange = { onChange } 
              value = {value} 
            />
            
            <span 
              className = 'input-group-btn'>
              <Button className = 'btn btn-primary searchBtn' type = 'submit'>
                Search
              </Button>
            </span>
          </div>
        </FormGroup>
      </form>
    )
  }

export default Search;
  
