import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

function Searched() {

  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async(name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=be3ca62cbd81429aae4d1f926a4e9301&number=12&query=${name}`)
    const recipes = await data.json();

    setSearchedRecipes(recipes.results)

  }

  useEffect(() => {
    getSearched(params.search);
  },[params.search])
  
  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return(
          <Card>
            <Link to={'/recipe/'+ item.id}>
            <img src={item.image} alt="" />
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

export default Searched