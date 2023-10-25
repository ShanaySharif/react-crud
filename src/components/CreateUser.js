export default function ListUser() {
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

                <input type="text" name="name" />

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