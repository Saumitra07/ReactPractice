import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css'

function MeetupList(props)
{

    return (
    <ul className={classes.list}>
        {props.meetups.map(
            (meetup)=>
            {
                return(
                <MeetupItem key={meetup.id}
                id={meetup.id}
                title={meetup.title}
                description={meetup.description}
                address={meetup.address}
                image={meetup.image}
                meetup={meetup}
                />
                )
            }

        )}
    </ul>);

    

}

export default MeetupList;