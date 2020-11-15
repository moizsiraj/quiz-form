import React from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import './InfoCard.css';
import Sidebar from './Sidebar';

const Question = ({ increaseQuestion, questionNumber, deleteQuestion }) => {
  return (
    <div
      className='d-flex'
      style={{
        width: '100%',
        justifyContent: 'space-evenly',
        paddingRight: '7vh',
        marginTop: '2vh',
      }}
    >
      <Container fluid className='flex-fill'>
        <Row>
          <Col style={{ paddingLeft: '12vh', paddingRight: '0vh' }}>
            <Form className='shadow-lg m-10'>
              <Form.Row className='px-3 pt-4 py-3'>
                <Form.Group as={Col} controlId='question'>
                  <Form.Control
                    style={{ fontSize: 'medium' }}
                    type='text'
                    placeholder='Question will be typed here'
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row className='px-3 pb-3'>
                <Col>
                  <Form.Control
                    as='select'
                    defaultValue='Multiple Choice'
                    size='lg'
                  >
                    <option>Short Answer</option>
                    <option>Paragraph</option>
                    <option>Multiple Choice</option>
                    <option>Check Boxes</option>
                  </Form.Control>
                </Col>
                <Col xs={10}>
                  <Form.Control size='lg' placeholder='option 1' />
                </Col>
              </Form.Row>
              <Form.Row className='px-3 pb-3'>
                <Col></Col>
                <Col xs={10}>
                  <Form.Control size='lg' placeholder='option 2' />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col></Col>
                <Col xs={10} className='pl-4 f-xs'>
                  <a href='google.com'>add option</a>
                </Col>
              </Form.Row>
            </Form>
          </Col>{' '}
        </Row>
      </Container>
      <Sidebar
        increaseQuestion={increaseQuestion}
        question={questionNumber}
        deleteQuestion={deleteQuestion}
      />
    </div>
  );
};

export default Question;
