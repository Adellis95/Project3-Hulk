import React, { useState } from "react";
import "./teacherloginstyle.css";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import jwt from "jsonwebtoken";
import axios from "axios";

const TeacherLogin = ({ setToken }) => {
  const [teacher, setTeacher] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleFormSubmit = (e) => {
    console.log("Success");
    e.preventDefault();
    axios
      .post("/api/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        setTeacher(response.data);
        history.push(`/teacherhome/${response.data._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
      transition: {
        staggerChildren: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        staggerChildren: 0.4,
        when: "beforeChildren",
      },
    },
  };

  const teacherHomeString = "/teacherhome" + teacher._id;

  return (
    <>
      <div className="row">
        <div className="col m12" id="teacherlogin">
          <h1>Teacher Login</h1>
        </div>
      </div>
      <motion.div
        className="container"
        id="teacherlogincontainer"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="row">
          <div className="col s10 offset-s1">
            <div className="row">
              <form
                className="col s12"
                onSubmit={(e) => {
                  handleFormSubmit(e, {
                    email,
                    password,
                  });
                }}
              >
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Enter Email"
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <label htmlFor="email">Enter Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Enter Password"
                      id="password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <label htmlFor="password">Enter Password</label>
                  </div>
                </div>
                <row className="row">
                  <div className="col s12">COPPA PRIVACY POLICY GOES HERE</div>
                </row>
                <row className="row">
                  <p>
                    <label>
                      <input type="checkbox" />
                      <span>Check to agree to Terms</span>
                    </label>
                  </p>
                </row>
                <div className="row center-align">
                  <div className="col s12">
                    <motion.button
                      className="waves-effect red darken-1 btn"
                      type="submit"
                      href={teacherHomeString}
                      whileHover={{
                        scale: 1.5,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                      }}
                    >
                      LOGIN
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TeacherLogin;
