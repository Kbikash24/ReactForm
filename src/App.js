import React from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UsersList';
import { useState } from 'react';

function App() {
  const [userList,setuserList]=useState([])
  const addUserHandler=(uName ,uAge,uCollege)=>{
    setuserList((prevUserList)=>{
      return[...prevUserList,{name:uName, age:uAge,college:uCollege,id:Math.random().toString()}]
    })
  }
  return (
    <div>
<AddUser onAddUser={addUserHandler}/>
<UserList users={userList}/>
    </div>
  );
}

export default App;
