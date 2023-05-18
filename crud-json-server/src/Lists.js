import React from "react";

function Lists(props) {
    let listrows = [];
    props.alldata.forEach(j => {
        listrows.push(
            <tr key={j.id}>
                <td>{j.id}</td>
                <td>{j.title}</td>
                <td>{j.author}</td>z
            </tr>
        );
    })
    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {listrows}
            </tbody>
        </table>
    )
}

export default Lists;