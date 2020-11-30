/* 
Write a function called `findUserByUsername` which accepts an array of objects, 
each with a key of username, and a string. 
The function should return the first object with the key of username that matches 
the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {

  const outUser = usersArray.find(function (fxinUser) {
    if (fxinUser.username === username) return true;
  })

  return outUser;

}


/*
Write a function called `removeUser` which accepts an array of objects, each with 
a key of username, and a string. 
The function should remove the object from the array. If the object is not found, 
return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {

  let idxFound = usersArray.findIndex(function (fxinUser) {
    if (fxinUser.username === username) return true;
  });

  if (idxFound > -1) {
    // make a copy of the user before removal. Function will return the removed 
    //  user.
    const userRemoved = usersArray[idxFound];

    // no idea how to remove from the middle, so for now,
    //  shift everything from idxFound, then pop the last 
    //  element.
    for (let idx = idxFound; idx < usersArray.length - 1; idx++) {
      usersArray[idx] = usersArray[idx + 1];
    }
    usersArray.pop();

    return userRemoved;

  } else {
    return undefined;
  }

}