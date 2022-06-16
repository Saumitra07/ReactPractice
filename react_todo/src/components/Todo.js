import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
function Todo(props1)
{

    const[modalIsOpen,setModalIsOpen]=useState(false,1);
    const [counter,setCounter]=useState(1)
  

 const  deleteHandler=()=>
    {
      setModalIsOpen(true,0);
      setCounter(0)
    }

 const closeModalHandler=()=>
 {
        setModalIsOpen(false);
        setCounter(1)
 }
        return(

            <div className="card">
            <h2>{props1.text}</h2>
            <div className="actions">
            <h1>{counter}</h1>
            <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}

          </div>
        )


}


export default Todo;