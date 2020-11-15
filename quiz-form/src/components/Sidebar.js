import React from 'react';
import { Button } from 'react-bootstrap';
import './Sidebar.css';

const Sidebar = ({ increaseQuestion }) => {
  return (
    <div className='bgroup'>
      <span>
        <Button
          className='shadow'
          variant='light'
          type='button'
          onClick={increaseQuestion}
          style={{
            display: 'inline-block',
            borderRadius: '50%',
            background: 'white',
            padding: '0.5em 0.6em',
            margin: '3px',
          }}
        >
          <i className='fas fa-plus-circle'></i>
        </Button>
      </span>
      <span>
        <Button
          className='shadow'
          variant='light'
          type='button'
          style={{
            display: 'inline-block',
            borderRadius: '50%',
            background: 'white',
            padding: '0.5em 0.6em',
            margin: '3px',
          }}
        >
          <i className='fas fa-trash'></i>
        </Button>
      </span>
    </div>
  );
};

export default Sidebar;
