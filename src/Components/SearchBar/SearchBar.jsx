import style from "./SearchBar.css"
import { useState } from "react";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className="SearchBar" style={{ padding: "10px" }}>
         <input type='search'
            onChange={handleChange}
         />

         <button className={style.styleButton}
            onClick={() => onSearch(id)}>
            Agregar
         </button>

      </div>
   );
}

//! si la funcion onSearch(id) retorna 5, quiere decir que tiene que buscar dentro de id el numero 5
