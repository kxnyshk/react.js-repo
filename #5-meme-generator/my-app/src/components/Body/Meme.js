import React from 'react';
import ReactDOM from 'react-dom';

import './Meme.css';
// import Data from './Data.js'

function Meme() {

    const[Meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/23ls.jpg",
    })
    const[allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        let api_url = "https://api.imgflip.com/get_memes";
        fetch(api_url)
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    // console.log(allMemes);

    let getMemeImage = () => {
        const randNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))
    }

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value,
        }))
    }

    return(
        <main className='Main'>
            <div className='Form'>
                <div className='Form-inputs Display-grid'>
                    <input 
                        type='text' 
                        name='topText'
                        value={Meme.topText}
                        className='Inputs' 
                        placeholder='Top text'
                        onChange={handleChange}>
                    </input>
                    
                    <input 
                        type='text' 
                        name='bottomText'
                        value={Meme.bottomText}
                        className='Inputs' 
                        placeholder='Bottom text'
                        onChange={handleChange}>
                    </input>
                </div>

                <div className='Form-button Display-grid'>
                    <button id='Button' onClick={getMemeImage}>Get new image 🎨</button>
                </div>
            </div>

            <div className='Meme'>
                <img id='Meme-image' src={Meme.randomImage}></img>
                <h2 className='Meme-text' id='Text-top'>{Meme.topText}</h2>
                {/* ONE DOES NOT SIMPLY */}
                <h2 className='Meme-text' id='Text-bottom'>{Meme.bottomText}</h2>
                {/* WALK INTO MORDOR */}
            </div>
        </main>
    )
}

export default Meme