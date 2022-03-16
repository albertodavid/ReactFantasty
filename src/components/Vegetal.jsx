import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from "styled-components"
import {Splide, SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import {Link}  from 'react-router-dom'

function Vegetal() {

    const [vegetal, setvegetal] = useState([])

    useEffect(() => {
      getvegetal();
    },[]);
    

    const getvegetal = async () => {

        const check = localStorage.getItem('vegetal');
        if(check){
            setvegetal(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();
            
            localStorage.setItem('vegetal', JSON.stringify(data.recipes))
            console.log(data)
            setvegetal(data.recipes)
        }
    }


  return (
    <div>

                <Wrapper>
                    <h3>Vegetarian Picks</h3>
                    <br />
                    <Splide options={{
                        perPage:3,
                        breakpoints:{
                            640:{
                                perPage:1,
                            },
                            800:{
                                perPage:2
                            }
                        },
                        arrows:false,
                        pagination:false,
                        drag:'free',
                        gap: '3rem'
                    }}>
                    {vegetal.map((recipe) => {
            return(
                    <SplideSlide key={recipe.id}>
                    <Card>
                    <Link to={'/recipe/'+ recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.tittle}/>
                        <Gradient />
                        </Link>
                    </Card>
                    </SplideSlide>
                 ); 
            })}
            </Splide>
            </Wrapper>
            
        
    </div>
  )
}

const Wrapper = styled.div`
    margin: 3rem
`
const Card = styled.div`
    min-height:15rem;
    border-radius:2rem;
    overflow: hidden;
    position: relative;

    img{

        border-radius:2rem;
        position: absolute;
        left:0;
        width:100%;
        height:100%;
        object-fit:cover;
    }
    p{
        position:absolute;
        z-index:10;
        padding-left:1rem;
        padding-right:1rem;
        bottom:0%;
        color:white;
        text-align:center;
        font-weight:600;
        font-size:1rem;

        background-color:rgba(0,0,0,0.2);
        display:flex;
        justify-content:center;
        align-items:center;
    }
`
const Gradient = styled.div`

    z-index:3;
    position:absolute;
    width:100%;
    height:100%;
    background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))

`

export default Vegetal
