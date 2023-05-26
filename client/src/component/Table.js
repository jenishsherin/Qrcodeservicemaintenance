
function Table({ data }) {
    return (
        <table >
            <thead>
                <tr>

                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>Location</th>
                    <th>Service</th>
                    <th>Service Type</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {data.length==0 && <tr><td colSpan={7} style={{textAlign:'center'}}>No request to view</td></tr>}
                {data.map((item) => <tr key={item.id}>

                    <td>{item.name}</td>
                    <td>{item.mobile}</td>
                    <td>{item.address}</td>
                    <td>{item.location}</td>
                    <td>{item.service}</td>
                    <td>{item.servicetype}</td>
                    <td>{item.status}</td>

                </tr>)}
            </tbody>
        </table>
    )
}
export default Table;