import axios from "axios";
import React from "react";
class Display extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
           mydata:[],
           isload:false
        }
    }
    componentDidMount()
    {
        axios.get("https://akashsir.in/myapi/crud/todo-list-api.php")
        .then((res)=>{
            console.log(res.data.todo_list)
            this.setState({
                mydata:res.data.todo_list,
                isload:true
            })
        })
    }
    render()
    {
        var {isload,mydata}=this.state
        if(!isload)
        {
           return <> <div class="center">
           <div class="loader"></div>
           </div></> 
           
        }
        return(
            <>
            <div>  
                <h1>Here is Your Task Details</h1>          
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Details</th>
                    </tr>
                </thead>
            {mydata.map((value)=>{
                return(
                    <>
                        <tbody>
                            <tr>
                                <td>{value.todo_id}</td>
                                <td>{value.todo_title}</td>
                                <td>{value.todo_details}</td>
                            </tr>
                        </tbody>
                    </>
                )
            })}
            </table>
            </div>
            </>
        )
    }
}
export default Display;