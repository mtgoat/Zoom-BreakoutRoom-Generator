import React, {useState, createContext} from "react";

// The context is imported and used by individual components that need data
export const UserContext = createContext();

// This component establishes what data can be used.
export const UserProvider = (props) => {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        return fetch("http://localhost:8088/users")
        .then(res => res.json())
        .then(setUsers);
    }

    const addUser = userObj => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
        .then(getUsers)
    }

        /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */

    return (
        <UserContext.Provider value={{users, getUsers, addUser}}>
         {props.children}
        </UserContext.Provider>
    )

}

