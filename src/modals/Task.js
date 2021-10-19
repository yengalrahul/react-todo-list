import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Task = ({modal,toggle,save}) => {
const[taskName,setTaskName]= useState('');
const[description,setDescription]= useState('');

const handleChange =(e)=>{
 const{name,value}= e.target

 if(name=== "taskName"){
     setTaskName(value)
 }else{
     setDescription(value)
 }

}
const handleSave=()=>{
    let taskObj ={}
    taskObj['Name']= taskName
    taskObj['Description']= description
    save(taskObj)

}

    return (
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
            <form class="was-validated">
                <div className="form-group mb-3">
                <label for="validationServer01" class="form-label">Task Name: </label>
                <input type="text" className="form-control is-invalid" id="validationServer01" value= {taskName} onChange={handleChange} name="taskName" required/>
                <div class="invalid-feedback">
      Please enter your task name
    </div>
              
                </div>
                <div className="from-group mb-3">
                <label for="validationServer02" class="form-label">Description: </label>
                <textarea  className="form-control is-invalid" id="validationServer02" value={description} onChange={handleChange} name="description" required/>
                <div class="invalid-feedback">
      Please enter your task description
    </div>
                </div>
            
                <ModalFooter >
                <Button class="mb-3" color="primary" type ="submit"onClick={handleSave}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </form>
            
           
            
            
            </ModalBody>
            
      </Modal>
    );
};

export default Task;