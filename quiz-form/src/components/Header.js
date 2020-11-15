import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className='back'>
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
                  className='px-3 py-1 m-2'
                  size='lg'
                  variant='dark'
                  type='submit'
                  value='Submit'
                >
                  Save
                </Button>
                <Button
                  className='px-3 py-1 m-2'
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
    </>
  );
};

export default Header;
