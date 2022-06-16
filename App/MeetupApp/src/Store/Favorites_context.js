import { createContext , useState} from "react";

const FavoritesContext=createContext({
favoritemeetups:[],
totalFavorites:0,
addFavorite:(favoriteMeet)=>{},
removeFavorite:(meetupid)=>{},
isMeetupFavorite:(meetupid)=>{}
});


export function FavoritesContextProvider(props){
    const [userFavorites,setUserFavorites]=useState([]);


    const context={
        favoritemeetups:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorite:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        isMeetupFavorite:isFavorite

        
    };

    function addFavoriteHandler(favoriteMeet)
    {
        setUserFavorites(
            (prev)=>{

                return prev.concat(favoriteMeet);

            }
        );
    }

    function removeFavoriteHandler(meetupid)
    {
        setUserFavorites(
            (prev)=>{
                return prev.filter(meetup=>(
                    meetup.id!==meetupid
                ))
            }
        )

    }
    function isFavorite(meetupid)
    {
            return userFavorites.some(meetup=>(
                meetup.id===meetupid
            ))
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>

}

export default FavoritesContext;
