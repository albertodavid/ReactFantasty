import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'


function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async() => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information/?${API_KEY}`)
    const detailData = await data.json();

    setDetails(detailData);
  }

  useEffect(() => {

    fetchDetails();
  },[params.name]);
  

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
      <img src={details.image} alt="" />  
      </div>  
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={()=>setActiveTab("instructions")}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={()=>setActiveTab("ingredients")}>Ingredients</Button>
      <br />

      {activeTab === "instructions" && (
      <div>
      <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
    </div>

      )}

{activeTab === "ingredients" && (
      <ul>
      {details.extendedIngredients.map((ing) =>(
      <li key={ing.id}>{ing.original}</li>

      ))}
    </ul>

      )}

      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top:10rem;
  margin-bottom:5rem;
  display:flex;

  .active{
    background: linear-gradient(35deg, #656565, #313131);
    color: white;
  }
IMG{
  margin-top:2.5rem
}
  h3{
    margin:1rem 0rem;
  }
li{
  font-size:1.2rem;
  line-height:2rem;
}
ul{
  margin-top:2rem;
}
`

const Button = styled.button`
padding:1rem 2rem;
color: #313131;
background:white;
border: 2px solid black;
margin-right:2rem;
font-weight:600;
`

const Info = styled.div`
  margin-left:10rem;
`

export default Recipe
