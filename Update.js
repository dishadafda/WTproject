import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update(){
    const {id} = useParams();
    const navigate = useNavigate();
    const apiUrl = "https://66f11aa541537919154f88ba.mockapi.io/patients/"+id;
        
    useEffect(()=>{
        fetch(apiUrl,{method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    const [data,setData] = useState({name:""});

    return(
        <>
        <Link to="/patients" className="btn btn-info m-2">Back</Link>
        <div className="row">
            <label className="col-2 m-2">Patients ID</label>
            <div className="col-4">
           <input type="text" value={data.id} className="form-control" onChange={(e)=>{
            setData({...data,id:e.target.value});
          }}/>
          </div>
        </div>

        <div className="row">
            <label className="col-2 m-2">Patients Name</label>
            <div className="col-4">
           <input type="text" value={data.name} className="form-control" onChange={(e)=>{
            setData({...data,name:e.target.value});
          }}/>
          </div>
        </div>

        <div className="row">
            <label className="col-2 m-2">Phone No.</label>
            <div className="col-4">
           <input type="text" value={data.phone} className="form-control" onChange={(e)=>{
            setData({...data,phone:e.target.value});
          }}/>
          </div>
        </div>
          
        <div className="row">
            <label className="col-2 m-2">Height</label>
            <div className="col-4">
           <input type="text" value={data.height} className="form-control" onChange={(e)=>{
            setData({...data,height:e.target.value});
          }}/>
          </div>
        </div>
        
        <div className="row">
            <label className="col-2 m-2">Age</label>
            <div className="col-4">
           <input type="text" value={data.age} className="form-control" onChange={(e)=>{
            setData({...data,age:e.target.value});
          }}/>
          </div>
        </div>


        <input type="button" className="btn btn-primary" value="Edit details" onClick={()=>{
                fetch(apiUrl,{
                    method:"PUT",
                    body:JSON.stringify(data),
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then((res)=>{
                    navigate('/patients')
                })
            }}/>
        </>
    )
}

export default Update;
