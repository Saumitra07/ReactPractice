import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useNavigate } from 'react-router-dom';
function NewMeetup()
{

      const history=useNavigate();
      const onAddMeetupHandler=(data)=>
      {
          fetch('https://react-meetup-4fe6f-default-rtdb.firebaseio.com/meetup.json', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            history("/", { replace: true });
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
        return(<div>
          <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
            
          </section>
        </div>)
        
}
export default NewMeetup;