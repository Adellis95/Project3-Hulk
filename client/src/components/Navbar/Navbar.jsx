import React from 'react';
import '../Navbar/style.css';

function Navbar(props) {

    const teacherHomeString = "/teacherhome/" + props.teacherId;

    return (
        <nav>
            {props.teacher && 
            <div className="nav-wrapper">
            <a href={teacherHomeString} className="left logo">On-Track App</a>
            {props.login &&
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a className="nav-link" href="/teacherlogin">Teacher Login</a></li>
                <li><a className="nav-link" href="/studentlogin">Student Login</a></li>
            </ul>
            }
            {!props.login &&
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li className="class-code">Class Code: {props.classCode}</li> {/*need API call for class code */}
                <li><a className="nav-link" href="/">Logout</a></li> {/*need logout route here*/}
            </ul>
            }
            </div>
            }
            {!props.teacher &&
            <div className="nav-wrapper">
            <h3 className="left logo">On-Track App</h3>
            {props.login &&
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a className="nav-link" href="/teacherlogin">Teacher Login</a></li>
                <li><a className="nav-link" href="/studentlogin">Student Login</a></li>
            </ul>
            }
            {!props.login &&
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li className="class-code">Class Code: {props.classCode}</li> {/*need API call for class code */}
                <li><a className="nav-link" href="/">Logout</a></li> {/*need logout route here*/}
            </ul>
            }
            </div>
            }
        </nav>
    );
}

export default Navbar;