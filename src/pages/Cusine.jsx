import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useParams, Link} from 'react-router-dom'

function Cusine() {
  let params = useParams();
  const [cuisine, setCuisine] = useState([]);

  const getCusine = async(name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${name}`)
    const recipes = await data.json();

    setCuisine(recipes.results)

  }


  useEffect(() => {
    getCusine(params.type);
    console.log(params);
  },[params.type])
  return (
    <Grid>
      {cuisine.map((item) => {
        return(
          <Card key={item.id}>
            <Link to={'/recipe/'+ item.id}>
              <img src={item.image} alt="" srcset="" />
              <h4>{item.title}</h4>
              </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
grid-gap: 1rem;
`;

const Card = styled.div`

  img{
    width:100%;
    border-radius:2rem;
    margin: 0px 1rem;
  }

  a{
    text-decoration:none
  }

  h4{
    text-align:center;
    padding:1rem;
  }

`


export default Cusine
