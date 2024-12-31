import React,{useState} from 'react'
import { Container,Row } from 'react-bootstrap'
import axios from 'axios'
export default function DictionaryApp() {
    // destructured of data
    const[data,setData]=useState("");
    // search Data or word from api 
    const[searchWord,setSearchWord]=useState("");
    // create a function fetch an informations on button
    // set while click on button a formEvent Handeling function 
    function getMeaning()
    {
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`).then((response)=>{
            setData(response.data[0]);
        });
    }

    // create a function to play and listen a word
    // function playAudio()
    // {

    // } 

    const playAudio=()=>{
        let audio=new Audio(data.phonetics[0].audio);
        audio.play();
    }

  return (
    <div>
      <Container className='mx-auto w-75 mt-5 p-5 bg-white rounded-pill dictionary-app shadow'>
       <h1 className='text-center'>Free dictionary App</h1>
       <hr className='border border-1 w-50' />
       {/* take input from users */}

       <center>
       <div className='form-group mt-3 w-50 mx-auto'>
       <input type='text' className='form-control w-75' placeholder='Enter a Word....' onChange={(e)=>setSearchWord(e.target.value)} />
      </div>

      <div className='form-group mt-3 w-50 mx-auto'>
       <button onClick={getMeaning} type='button' className='btn btn-md btn-dark text-white w-75'><span className='bi bi-search'></span></button>
      </div>

       {/*fetch all word from api  */}

      {data && ( 

      <div className='showResult mt-4'>
      <h1>{data.word}{" "} <button type='button' onClick={()=>{playAudio()}}><span className='bi bi-megaphone-fill'></span></button></h1>   
      {/* details of word */}
      <h1>Part of Speech</h1>
      <p>{data.meanings[0].partOfSpeech}</p> 
      <h2 className='text-center'>Definitions</h2>
      <p>{data.meanings[0].definitions[0].definition}</p>
      <h3 className='text-center'>Examples</h3>
      <p>{data.meanings[0].definitions[0].example}</p>
      </div>
      )};
      </center>      
      </Container>
    </div>
  )
}
