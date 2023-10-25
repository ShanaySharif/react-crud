import { useState} from "react";

export default function ListUser() {

    const [inputs, setInputs] = useState({})
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.name;
        setInputs(values => ({values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

    }
    return (
        <div> 
            <h1>List Users</h1>
        <form onSubmit={handleSubmit}> 
<table cellSpacing = "10">
    <tbody>
        <tr>
            <th>
            <label> Name:</label>

                

                </th>
                <td>

                <input type="text" name="name" onChange={handleChange}/>

            </td>

        </tr>

        <tr>
            <th>
            <label> Name:</label>
                

                </th>
                <td>
                <input type="text" name="name" />


            </td>

        </tr>
        <tr>
            <th>
            <label> Mobile: </label>
                

                </th>
                <td>
                <input type= "text" name= "name" />


            </td>

        </tr>
        <tr>
           
                <td colspan="2" align ="right">
                    
                <button> Save </button>

            </td>

        </tr>
        

    </tbody>


</table>

</form>
</div>

)
}