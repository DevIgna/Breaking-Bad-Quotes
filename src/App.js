import React, { useState, useEffect } from 'react'
import Quote from './components/Quote.jsx';
import Spinner from './components/Spinner.jsx';


const initialQuote = {
  text: '',
  author: ''
}

function App() {
  const [quote, setQuote] = useState(initialQuote);
  const [loading, setLoading] = useState(false);

  const updateQuote = async () => {
    setLoading(true)
    const quotesURL = 'https://www.breakingbadapi.com/api/quote/random';
    const res = await fetch(quotesURL);
    const [newQuote] = await res.json();
    // console.log(data)
    /* 
    me muestra un array con un objeto dentro con la quote random
    pero, como es incómodo, hagoo data[0] para que solo me muestre
    la info de la quote en objeto sin el array, pero puedo hacerlo 
    mejor destructurando data = [newQuote]
    */
    // version 1 const {quote, author} = newQuote;
    // version 2:
    const { quote: text, author } = newQuote;

    setQuote({
      text, //sin destructuring newQuote.quote & newQuote.author
      author
    });
    setLoading(false);
  };

  useEffect(() => {
    updateQuote();
  }, [])

  //! DRY: DON'T REPEAT YOURSELF, USAR LA FUNCION CREADA UPDATEQUOTE
  // const changeQuote = (e) =>{
  //   e.preventDefault();
  // }
  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      {/*Hacer el cb hace que la pagina no recargue*/}
      <button onClick={() => updateQuote()}>Get Another</button>
      {loading ? <Spinner /> : <Quote quote={quote}/>}
      
    </div>
  );
}

export default App;
