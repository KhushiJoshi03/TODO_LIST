import axios from "axios";
import React from "react";

class Add extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            txt1:"",
            txt2:""
        }
    }
    txtChange(e)
    {
        this.setState({[e.target.name]:e.target.value})   
    }
    btnsubmit()
    {
        var mydata={
            "todo_title":this.state.txt1,
            "todo_details":this.state.txt2,
        }
        var myjson=JSON.stringify(mydata);
        console.log(myjson);
        let customConfig={
            headers:{
                'Content-Type':'application/json'
            }
        }
        axios.post("https://akashsir.in/myapi/crud/todo-add-json.php",myjson,customConfig)
        .then((res)=>{
            console.log(res)
            if(res.data.flag=="1")
            {
                alert("Record Added Successfully"+res.data.msg)
            }
            else{
                alert(res.data.msg)
            }
        })
    }
    render()
    {
        return(
            <>
            <div >
            <h1 style={{textAlign:"center",fontStyle:"oblique",padding:"60px"}}>Add Your Task Here</h1> <br/>
            <p style={{textAlign:"center",fontSize:"24px",padding:"10px"}}>
                Title:<input type="text" name="txt1" onChange={this.txtChange.bind(this)}/> <br/> <br/>
                Details:<input type="text" name="txt2" onChange={this.txtChange.bind(this)}/> <br/> <br/>
                <input type="button" value="Save" onClick={this.btnsubmit.bind(this)}/>
            </p>
            </div>
            </>
        )
    }
}
export default Add;