import styled from "styled-components";
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';
import { useState, useEffect } from "react";


const Cuisine = () => {

    const [cuisine, setCuisine] = useState([])
    let params = useParams();
    
    const getCuisine = async (name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e056fa7a51274438b306f68ee0cffcaf&number=9&cuisine=${name}`);

        const recipes = await data.json();

        setCuisine(recipes.results);

    }

    useEffect(() => {
        getCuisine(params.type)
    }, [params.type])

  return (
    <Grid>
        {cuisine.map((item) => {
            return(
                <Card key={item.id}>
                    <Link to={'/recipe/'+item.id}>
                    <img src={item.image} alt=''/>
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img{
        border-radius: 1.5rem;
    }

    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`;

export default Cuisine
