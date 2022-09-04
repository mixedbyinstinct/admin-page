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
font-weight: bold;
font-size: 18px;
}
& td {
font-family: system-ui;
font-weight: medium;
font-size: 14px;
}
& tr:nth-child(odd) {
    background-color: #67676a;
}
`;

const Songs = () => {

    const [songData, setSongData] = useState([]);
    useEffect(() => {
        axios.get("/songs").then(({data}) => setSongData(data));
    })
    function renderData() {
        return songData.map((song, index) => {
            const { _id, title, user } = song;

            return (
                <tr key={_id}>
                            <td>{user}</td>
    <td>{title}</td>
    </tr>

    );

})


}
return (
       <Container>

       <Table striped>

       <thead>

       <caption>Songs</caption>

       </thead>

       <tbody>
       {renderData()}
       </tbody>
</Table>
</Container>


);
} 


export default Songs;