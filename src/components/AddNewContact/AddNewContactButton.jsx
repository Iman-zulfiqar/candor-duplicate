import React , {useState} from 'react'
import ModalForm from './ModalForm';

function AddNewContactButton() {
  const [isOpen , setIsOpen]=useState(false);

  const modalOpenHandler=()=>
  {
    setIsOpen(true);
  }
  const modalCloseHandler=()=>
  {
    setIsOpen(false);
  }

  return (
    <React.Fragment >
       <button onClick={modalOpenHandler} className='float-right w-14 h-14 rounded' ><img src="src\assets\Svg\add-contact.svg" alt="user icon" /></button>
        {isOpen && <ModalForm modalCloseHandler={modalCloseHandler}/>}
        
    </React.Fragment>
  )
}

export default AddNewContactButton;
