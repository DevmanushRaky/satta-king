import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './LiveTable.css';

function Livetable() {
    const data = [
        { location: 'DISAWER', time: '05:00 AM',   value1: 96, value2: 10 },
        { location: 'GALI', time: '11:15 PM',   value1: 59 },
        { location: 'FARIDABAD', time: '06:15 PM',   value1: 62 },
        { location: 'GAZIYABAD', time: '08:00 PM',   value1: 24 },
        { location: 'INDIA BAZAR', time: '04:15 PM',   value1: 7 },
        { location: 'PUNE CITY', time: '12:30 AM',   value1: 74, value2: 45 },
        { location: 'RANCHI', time: '05:00 AM',  value1: 96, value2: 10 },
        { location: 'DELHI GOLD', time: '07:45 PM',   value1: 95 },
        { location: 'MUMBAI CITY', time: '01:15 PM',   value1: 77 },
        { location: 'PUNJAB', time: '03:40 PM',   },
        { location: 'HINDUSTAN', time: '05:30 PM',   value1: 1 },
        { location: 'DUBAI BAZAR', time: '11:00 PM',  value1: 67 },
        { location: 'OLD DELHI', time: '04:00 PM',  value1: 9 },
        { location: 'PARAS', time: '07:40 PM',   value1: 89 },
        { location: 'Lucknow Gold', time: '12:10 PM',   value1: 32 },
        { location: 'SAI RAM', time: '03:30 PM',   value1: 3 },
        { location: 'HARYANA BAZAR', time: '04:00 PM',   value1: 96 },
        { location: 'INDIA DARBAR', time: '11:20 AM',   value1: 38 },
        { location: 'DELHI CITY', time: '04:30 PM',   value1: 51 },
        { location: 'KASHIPUR', time: '04:30 PM',   },
        { location: 'AHMEDABAD', time: '04:50 PM',   value1: 33 },
    ];

    return (
        <Container>
            <h1>Live Table</h1>
            <Row className="header-row">
                <Col>Location</Col>
                <Col>Time</Col>
                <Col>Last</Col>
                <Col>Today</Col>
            </Row>
            {data.map((item, index) => (
                <Row key={index}>
                    <Col>{item.location}</Col>
                    <Col>{item.time}</Col>
                    <Col>{item.value1}</Col>
                    <Col>{item.value2}</Col>
                </Row>
            ))}
        </Container>
    );
}

export default Livetable;
