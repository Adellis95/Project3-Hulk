import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./Modal.css";
import axios from "axios";

// axios.get('/api/rewards')
// .then((response) => {
//     setRewards(response.data);
// })
// .catch((err) => {
//     console.log(err);
// });

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <div className="modal-btn">
        <button
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
        >
          Use Stars
        </button>

        <a href="#" className="modal-trigger" data-target="modal1"></a>

        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <button
            type="button"
            className="modal-close close-button"
            data-dismiss="modal"
          >
            <span aria-hidden="true">×</span>
          </button>
          <div className="modal-content">
            <h4>Email Teacher?</h4>
            <p>Do you want to email your teacher to use your stars?</p>
            <a
              className="modal-close waves-effect waves-green btn-flat"
              onClick={async () => {
                axios.post("/redeem/:id", {}).catch((err) => {
                  console.log(err);
                });
              }}
            >
              Yes
            </a>
            <a className="modal-close waves-effect waves-red btn-flat disagree-btn">
              No
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
