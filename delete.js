import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Delete(){
    const [data, setData] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();

    const apiUrl =  "https://66f11aa541537919154f88ba.mockapi.io/patients/"+id;

    useEffect(()=>{
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    return(
        <>
            <Link to="/patients" className="btn btn-info m-2">Back</Link>
            <button className="btn btn-danger m-2" onClick={()=>{
                        const apiUrl =  "https://66f11aa541537919154f88ba.mockapi.io/patients/"+id;

                        fetch(apiUrl, {method:"DELETE"})
                        .then(res=>res.json())
                        .then(res=>{
                            navigate('/patients');
                        })
            }}>Delete</button>

            <button className="btn btn-primary" onClick={()=>{
                navigate('../patients/edit/'+id);
            }}>update</button>

            <div className="container">
                <table className="table table-striped">
                    <tr className="bg-secondary">
                        <td className="fs-4 text-light">Name</td>
                        <td className="fs-4 text-light">Phone NO.</td>
                        <td className="fs-4 text-light">Age</td>
                        <td className="fs-4 text-light">Admitted Date</td>
                        <td className="fs-4 text-light">Height</td>
                        <td className="fs-4 text-light">Weight</td>
                    </tr>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.phone}</td>
                        <td>{data.age}</td>
                        <td>{data.AdmittedDate}</td>
                        <td>{data.height}</td>
                        <td>{data.weight}</td>
                    </tr>
                </table>
            </div>
            
        </>
    );
}

export default Delete;