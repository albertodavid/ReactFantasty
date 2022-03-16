import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'



function Search() {


    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/search/' + input)
        console.log("hey");
    }



  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
          <input onChange={(e)=> setInput(e.target.value)} type="text" value={input} />
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    padding-left: 26rem;
    padding-right: 26rem;
    padding-top: 1rem;
    
    breakdown

    width:100%;
    color:white;

    div{
        width:100%;
        position:relative;
    }

    input{
        border:none;
        color:white;
        background: linear-gradient(35deg, #656565, #313131);
        font-size::1.5rem;
        width:100%;
        padding:1rem 3rem;
        border:none;
        border-radius:1rem;
        outline:none;
    }
`

export default Search