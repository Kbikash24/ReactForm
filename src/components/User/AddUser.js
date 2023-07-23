import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredCollegename,setEnteredCollegename]=useState('')
  const [error, setError]=useState()

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({ title:'Invalid Input', message:'Please enter a valid name and age'})
      return;
    }
    if (+enteredAge < 1) {
        setError({ title:'Invalid Age', message:'Please enter a valid age'})
      return;
    }
    props.onAddUser(enteredUsername, enteredAge,enteredCollegename);
    setEnteredUsername('');
    setEnteredAge('');
    setEnteredCollegename('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const collegenameChangeHandler = (event) => {
    setEnteredCollegename(event.target.value);
  };
 
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorhandler=()=>{
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorhandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <label htmlFor="college"> College-Name</label>
          <input
            id="collegename"
            type="text"
            value={enteredCollegename}
            onChange={collegenameChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;