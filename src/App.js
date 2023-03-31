import './App.css';
import Card from './Components/Card/Card.jsx';
import Cards from './Components/Cards/Cards.jsx';
import SearchBar from './Components/SearchBar/SearchBar.jsx';
// import characters, { Rick } from './data.js';
import style from "./App.css";
import Nav from "./Components/Nav/Nav";
import { useState } from "react"; // importamos el USESTATE
import axios from "axios";


function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name && !characters.find((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡Se repite o no hay personajes con este ID!');
         }
      });

   };

   const onClose = (id) => {
      console.log(characters)
      console.log(id)
      setCharacters(characters.filter((char) => char.id !== parseInt(id)));
   }


   return (
      <div className='App' style={{ padding: "25px" }}>

         <div>
            <Nav onSearch={onSearch} />
         </div>

         <div>
            <Cards characters={characters} onClose={onClose} />
         </div>

      </div>

   );
}
//* <Cards characters={characters} onClose ={onClose} /> le hago un pasamanos a cards para que cards distribuya

export default App;


//! ( FILA 17 if (data.name && !characters.find((char) => char.id === data.id))) si no encuentro en caracter ningun char cuyo id sea igual a data.id
//? ( FILA 9 ) Esto lo que hace nos da todo un padding al contorno de nuestro proyecto separando el navegador de busqueda del body
//! no me sale declarar el background del 10! modifique fila 10 y 6 con el modulo app.css