import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards({ characters, onClose }) {
   return (
      <div className={style.containe}>

         {characters.map(({ id, name, status, species, gender, origin, image }) => {
            return <Card key={id}
               id={id}
               name={name}
               status={status}
               gender={gender}
               species={species}
               origin={origin.name}
               image={image}
               onClose={onClose}
            />

         })
         }

      </div>
   )
}


