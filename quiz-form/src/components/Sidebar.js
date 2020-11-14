import React from 'react';
import { Button } from 'react-bootstrap';
import './Sidebar.css';
const Sidebar = () => {
  return (
    <div className='d-flex flex-column'>
      <Button className='button'>
        <i class='fas fa-plus-circle'></i>
      </Button>
      <Button className='button'>
        <i class='fas fa-trash'></i>
      </Button>
    </div>
  );
};

export default Sidebar;
