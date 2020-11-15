import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const InfoCard = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col
            style={{
              paddingLeft: '12vh',
              paddingRight: '12vh',
            }}
          >
            <Card className='shadow-sm px-0'>
              <Card.Body>
                <Card.Title>
                  <strong>Questions will be typed here</strong>
                </Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  Correct answers will be here
                </Card.Subtitle>
              </Card.Body>
            </Card>{' '}
          </Col>{' '}
        </Row>
      </Container>
    </div>
  );
};

export default InfoCard;
