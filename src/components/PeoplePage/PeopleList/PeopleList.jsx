
import styles from './PeopleList.module.css';
import {Link} from "react-router-dom";

const PeopleList = ({people}) => {
 return (
     <ul className={styles.list__container}>
         {people.map(({ id, name, img }) =>
             <li className={styles.list__item} key={id}>
                 <a>
                     <img className={styles.person__photo} src={img} alt={name} />
                     <p>{name}</p>
                 </a>
             </li>
         )}
     </ul>
 );}

export default PeopleList;