export function Table({data})
{
   
    return(

        <div className="d-flex justify-content-center text-center">
        <table className="w-50 bg-dark text-white fw-bold fs-4">
            <th className="border border-2 border-white">Name</th>
            <th className="border border-2 border-white">Email Id</th>
            
                {data.map(val=>(
                    <tr>
                        <td className="border border-2 border-white">{val.Name}</td>
                        <td className="border border-2 border-white">{val.Email}</td>
                    </tr>
                ))}
            
        </table>
        </div>
    
    )
}