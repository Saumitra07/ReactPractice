import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../Store/Favorites_context";
import {useContext} from 'react';

function Favorites()
{

    const favcontext=useContext(FavoritesContext);

    let content;
    if(favcontext.totalFavorites===0)
    {
        content=<p>No Favorites Yet. Do you want to add Any?</p>
    }
    else{
        content= <MeetupList meetups={favcontext.favoritemeetups}/>
    }

        return(<section>

            <h1>My favorites</h1>
           {content}
        </section>)
       
}
export default Favorites;