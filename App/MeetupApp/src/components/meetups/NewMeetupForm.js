import Card from "../ui/Card";
import { useRef } from "react";
import classes from './NewMeetupForm.module.css'
function NewMeetup(props)
{
    const titleInputRef=useRef();
    const imageInputRef=useRef();
    const addressInputRef=useRef();
    const descriptionInputRef=useRef();
    const submitHandler=(event)=>{

            event.preventDefault();
            const enteredTitle=titleInputRef.current.value;
            const enteredImage=imageInputRef.current.value;
            const enteredAddres=addressInputRef.current.value;
            const enteredDescription=descriptionInputRef.current.value;
            const meetUpData={

                    title:enteredTitle,
                    image:enteredImage,
                    address:enteredAddres,
                    description:enteredDescription
            }
        
           // console.log(meetUpData);

           props.onAddMeetup(meetUpData);

    }

   

    return (
            <Card>
                
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title" ref={titleInputRef}></input>
                </div>  
                <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" required id="image" ref={imageInputRef}></input>
                </div> 
                <div className={classes.control}>
                <label htmlFor="address">Meetup address</label>
                <input type="text" required id="address" ref={addressInputRef}></input>
                </div> 
                <div className={classes.control}>
                
                <label htmlFor="description">Meetup description</label>
                <textarea required id="description" ref={descriptionInputRef}></textarea>

                </div>
                <div className={classes.actions}>
                <button>Add Meetup</button>
                </div>
            </form>

            </Card>

    )
    
}
export default NewMeetup;