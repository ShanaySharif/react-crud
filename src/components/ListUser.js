import axios from "axios"
import { useEffect, useState } from "react";



export default function ListUser() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:80/api/users/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }






    return (
        <h1>List Users</h1>

    )
}