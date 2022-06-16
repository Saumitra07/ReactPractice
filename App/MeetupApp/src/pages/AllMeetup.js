import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

function AllMeetup()
{
      const [isLoading,setIsLoading]=useState(true);
      const [meetups,setMeetups]=useState([]);

      useEffect(()=>{

          setIsLoading(true)
        fetch('https://react-meetup-4fe6f-default-rtdb.firebaseio.com/meetup.json')
        .then(response=>response.json())
        .then(data=>{

          const meet=[]
          for(const key in data)
          {
              const m={
                id:key,
                ...data[key]
              }
              meet.push(m);
          }
            
            setIsLoading(false)
            setMeetups(meet);
  
        });

      },[]);



      if(isLoading)
      {
        return (<section>

          <p>Loading</p>
        </section>)
      }
        return (  <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={meetups}/>
        </div>)
      
}
export default AllMeetup;