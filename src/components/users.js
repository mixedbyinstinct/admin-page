import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
& caption {

font-family: system-ui;
}
& td {
font-family: system-ui;
}
`;

const Users = () => {

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get("/users").then(({data}) => setUserData(data));
    })
    function renderData() {
        return userData.map((user, index) => {
            const { _id, email, username, createdAt } = user;

            return (
                <tr key={_id}>
                            <td>{email}</td>
    <td>{username}</td>
        <td>{createdAt}</td>
    </tr>

    );

})


}
return (
       <Container>

       <Table striped>

       <thead>

       <caption>Users</caption>

       </thead>

       <tbody>
       {renderData()}
       </tbody>
</Table>
</Container>


);
} 

export default Users;