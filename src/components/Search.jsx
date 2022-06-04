import styled from "styled-components";
import {useState} from 'react';
import {BsSearch} from 'react-icons/bs';
import {useNavigate} from 'react-router-dom';


const Search = () => {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('searched/'+input)
    }

  return (
    <FormStyle onSubmit={submitHandler} >
        <div>
            <BsSearch/>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
    
    div{
        position: relative;
        width: 100%;
    }

    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        padding: 1rem 3rem;
        border: none;
        border-radius: 4px;
        outline: none;
        width: 100%;
        color: white;
    }
    svg{
        color: white;
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
    }
`;

export default Search
