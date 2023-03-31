import style from "./Card.module.css";


export default function Card(props) {
   return (

      <div className={style.container}>

         <img src={props.image} alt='' />
         <h2>Name: {props.name}</h2>
         <h2>Species: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         {/* <h2>Status: {props.status}</h2>
         <h2>Origin:{props.origin.name}</h2> */}
         <button onClick={() => props.onClose(props.id)} className={style.closeButton}>X</button>

      </div>
   );
}



// En card se le pone Import style from "./Card.modules.css"; para poder traer las cosas de Card modules a este modulo
// creamos en div una className con un style que lo vamos a denominar " contenedor "
// En Card.modules.css vamos a realizar el siguiente codigo