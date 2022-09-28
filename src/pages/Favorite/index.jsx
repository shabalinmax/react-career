import React from 'react';
import './Favorite.css'
import Vacancy from "../../components/Vacancy";
import {Link} from "react-router-dom";
const Favorite = ({vacancyList}) => {
    const [isFavoriteListChanged, setFavoriteListChanged] = React.useState(false)

    vacancyList = vacancyList.filter(el => el.isFavorite)
    React.useEffect(() => {
        setFavoriteListChanged(false)
    }, [isFavoriteListChanged])
    return (
        <div className={'favoriteWrapper'}>
           <div className="favorite">
               <h1>Избранные вакансии</h1>
               {
                   vacancyList.length > 0 ?  vacancyList.map((el) =>
                       <Vacancy
                           setFavoriteListChanged = {setFavoriteListChanged}
                           key = {el.id}
                           job = {el}
                       />
                   )
                       :
                       <h2>
                           <Link to={'/'}>
                               Вы еще не добавили ни одну вакансию в избранное :(
                               <br/>
                               нажмите, чтобы перейти на страницу поиска
                           </Link>
                       </h2>
               }
           </div>
        </div>
    );
};

export default Favorite;
