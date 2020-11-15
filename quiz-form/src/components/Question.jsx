import { React, useState } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import './Question.css';
import Sidebar from './Sidebar';

const Question = ({ increaseQuestion, questionNumber, deleteQuestion }) => {
  var count = 0;
  const [noOfOptions, IncreaseOptions] = useState([count]);

  const addOption = () => {
    let current = noOfOptions.length - 1;
    console.log('chaling');
    count = noOfOptions[current];
    count++;
    IncreaseOptions(noOfOptions.concat([count]));
  };

  var value = 'Multiple Choice';
  const [questionType, QuestionType] = useState(value);

  const changeQuestionType = (value) => {
    QuestionType(value);
  };

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
              {questionType === 'Multiple Choice' ? (
                <div>
                  <Form.Row className='px-3 pb-3'>
                    <Col>
                      <Form.Control
                        as='select'
                        defaultValue='Multiple Choice'
                        size='lg'
                        onChange={(e) => changeQuestionType(e.target.value)}
                      >
                        <option>Short Answer</option>
                        <option>Paragraph</option>
                        <option>Multiple Choice</option>
                        <option>Check Boxes</option>
                      </Form.Control>
                    </Col>
                    <Col xs={10}>
                      <Form.Control size='lg' placeholder='option' />
                    </Col>
                  </Form.Row>
                  {noOfOptions.map((option) => (
                    <Form.Row className='px-3 pb-3' key={option}>
                      <Col></Col>
                      <Col xs={10}>
                        <Form.Control size='lg' placeholder='option' />
                      </Col>
                    </Form.Row>
                  ))}

                  <Form.Row>
                    <Col></Col>
                    <Col xs={10} className='pl-4 f-xs'>
                      <span className='sub' onClick={addOption}>
                        Add Option
                      </span>
                    </Col>
                  </Form.Row>
                </div>
              ) : questionType === 'Short Answer' ? (
                <div>
                  <Form.Row className='px-3 pb-3'>
                    <Col>
                      <Form.Control
                        as='select'
                        defaultValue='Short Answer'
                        size='lg'
                        onChange={(e) => changeQuestionType(e.target.value)}
                      >
                        <option>Short Answer</option>
                        <option>Paragraph</option>
                        <option>Multiple Choice</option>
                        <option>Check Boxes</option>
                      </Form.Control>
                    </Col>
                    <Col xs={10}>
                      <Form.Control
                        size='lg'
                        placeholder='Type in your answer'
                      />
                    </Col>
                  </Form.Row>
                </div>
              ) : questionType === 'Paragraph' ? (
                <div>
                  <Form.Row className='px-3 pb-3'>
                    <Col>
                      <Form.Control
                        as='select'
                        defaultValue='Paragraph'
                        size='lg'
                        onChange={(e) => changeQuestionType(e.target.value)}
                      >
                        <option>Short Answer</option>
                        <option>Paragraph</option>
                        <option>Multiple Choice</option>
                        <option>Check Boxes</option>
                      </Form.Control>
                    </Col>
                    <Col xs={10}>
                      <Form.Control
                        size='lg'
                        as='textarea'
                        rows={3}
                        placeholder='Type in your answer'
                      />
                    </Col>
                  </Form.Row>
                </div>
              ) : (
                <div>to be added</div>
              )}
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
