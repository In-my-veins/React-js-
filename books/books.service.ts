import {Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

private users = [
  { id: 1, name: "Alice Johnson", email: "alice.j@example.com" },
  { id: 2, name: "Bob Smith", email: "bob.smith@example.com" },
  { id: 3, name: "Charlie Davis", email: "charlie.d@example.com" },
  { id: 4, name: "Diana Evans", email: "diana.e@example.com" },
  { id: 5, name: "Ethan Foster", email: "ethan.f@example.com" },
  { id: 6, name: "Fiona Green", email: "fiona.g@example.com" }
]

getUser(){
  return this.users;
}

getUserId(id:number){
 const getUserById =  this.users.find(user => user.id === id)
 if(!getUserById){
  return "User not found";
 }

 return getUserById
}

postUser(body: any){
  const userId = this.users.length + 1;
  const newUser = {id: userId, ...body}
  this.users.push(newUser)

  return newUser
}

updateUser(id: number,body:any){
 const getUser = this.users.find(user => user.id === id)
 if(!getUser){
  return "User not found"
 }

 Object.assign(getUser,body)

 return getUser
}

deleteUser(id:number){
  const userFind = this.users.find(user => user.id === id)
    if(!userFind){
      return {message: "User not found"}
    }
  
  const newUsers = this.users.filter(user => user.id != id)

  this.users = newUsers;
  return this.users
}


}