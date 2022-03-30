import React from 'react';
import "./Nabar.styles.scss"
import {Link,Router} from "react-router-dom"
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
  const history = useHistory()
  return (
    <div>
      <ul>
       <li onClick={() => history.push('/main')}>
         Main
       </li>
        <li onClick={() => history.push('/posts')}>Posts</li>
      </ul>
    </div>
  );
};

export default Navbar;