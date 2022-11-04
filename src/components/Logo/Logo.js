import React from "react";
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';


const Logo = () => {
  return (
    <div className='ma4 mt0'> 
    <Tilt className='Tilt' options={{max:25}} style={{ height: '200px',width: '200px', backgroundColor: 'blue' }}>
        <h2>React Tilt 👀</h2>
      </div>
    </Tilt>
    </div>
  );
};

//ReactDOM.render(<Logo />, document.getElementById('root'));

export default Logo;
