import classes from '../meetups/MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../Store/Favorites_context';
import {useContext} from 'react';

function MeetupItem(props)
{

        const favContext=useContext(FavoritesContext);
        const itemIsFav=favContext.isMeetupFavorite(props.id);
        function toggleFavoriteStatushandler(){

                    if(itemIsFav)
                    {
                        favContext.removeFavorite(props.id)
                    }
                    else
                    {
                        favContext.addFavorite(props.meetup)
                    }
        }


        return <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}></img>
            </div>
            <div className={classes.content}>
                <h3>{props.meetup.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatushandler}>{itemIsFav?'Remove from Favorites':'To Favorites'}</button>

            </div>
            </Card>

        </li>
}

export default MeetupItem;