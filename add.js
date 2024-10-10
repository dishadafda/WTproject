import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add(){
    const [data, setData] = useState({});
    const navigate = useNavigate();
    return(
        <>
        <h2 className="m-2">Add Patient</h2>
            <div class="form-group row m-1">
                <label for="text2" class=" col-2 col-form-label">Patient ID</label> 
                <div class="col-4">
                <input onChange={(e)=>{
                    setData({...data,id:e.target.value})
                }} type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row m-1">
                <label for="text1" class=" col-2 col-form-label">Patient Name</label> 
                <div class="col-4">
                <input onChange={(e)=>{
                    setData({...data,name:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group row m-1">
                <label for="text3" class=" col-2 col-form-label">Phone No.</label> 
                <div class="col-4">
                <input onChange={(e)=>{
                    setData({...data,phone:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row m-1">
                <label for="text3" class=" col-2 col-form-label">Gender</label> 
                <div class="col-4">
                <input onChange={(e)=>{
                    setData({...data,gender:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div> 

            <div class="form-group row m-1">
                <label for="text3" class=" col-2 col-form-label">Age</label> 
                <div class="col-4">
                <input onChange={(e)=>{
                    setData({...data,age:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div> 
            
            <div class="form-group row m-1">
                <div class="col-5">
                <button onClick={()=>{
                    const apiUrl = "https://66f11aa541537919154f88ba.mockapi.io/patients";

                    fetch(apiUrl,{
                        method:"POST",
                        body:JSON.stringify(data),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        navigate('/patients');
                    });
                }} name="submit" class="btn btn-primary">Add Patient</button>
                </div>
            </div>
        </>
    )
}
export default Add;