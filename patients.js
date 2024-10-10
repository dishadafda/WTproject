import { useEffect, useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";

function Patients(){
    const [data, setData] = useState([]);

    const { id } = useParams();

    const navigate = useNavigate();
    const apiUrl = "https://66f11aa541537919154f88ba.mockapi.io/patients";

    useEffect(()=>{
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    const foramtedPatient = data.map((pat)=>{
        return(
            <>
            <tr>
                <td className="col-1 border border-primary-subtle fs-4">{pat.id}</td>
                <td className="col-4 border border-primary-subtle fs-4">{pat.name}</td>
                <td className="col-1 border border-primary-subtle fs-4"><Link className="btn btn-primary" style={{width:100,height:40}} to={"/patients/"+pat.id}>Read More</Link></td> 
            </tr>
       
        </>
        );
    })

    return(
    <>
    <div className="m-5" style={{width:800,
        position:"absolute",
        left:300}}>
    <table className="table table-striped border border-secondary">
        <tr className="bg-secondary">
            <td className="text-light fs-3">ID</td>
            <td className="text-light fs-3">Name</td>
            <td></td>
        </tr>
        {foramtedPatient}
        </table>
    </div>
    </>
   );
}
export default Patients;