import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import './Header.css';
import InfoCard from './InfoCard';

const Header = () => {
  return (
    <>
      <div className='back'>
        <div className='welcome'>
          <Container fluid className='items'>
            <Row>
              <Col>
                <div className='text-left'>
                  <h1>Create New Quiz</h1>
                </div>
              </Col>
              <Col>
                <div className='float-right buttons'>
                  <Button
                    className='px-3 py-1 m-3'
                    size='lg'
                    variant='dark'
                    type='submit'
                    value='Submit'
                  >
                    Save
                  </Button>
                  <Button
                    className='px-3 py-1 m-3'
                    size='lg'
                    variant='dark'
                    type='submit'
                    value='Submit'
                  >
                    Cancel
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className='position-absolute'
          style={{ top: '15vh', width: '100%' }}
        >
          <InfoCard />
        </div>
      </div>
    </>
  );
};

export default Header;
