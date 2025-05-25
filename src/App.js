import "./styles.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function App() {
  const [open, setOpen] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState();
  const [username, setUsername] = useState();
  const [emailAd, setEmailAd] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    e.preventDefault();
    if (phoneNumber.length < 10) {
      alert("Invalid phone number. Please enter 10-digit phone number");
    } else if (dob.replace(/\D/g, "") > "20250524") {
      alert("Invalid date of birth. Date of birth cannot be in the future");
    } else {
      setDob("");
      setEmailAd("");
      setPhoneNumber("");
      setUsername("");
    }
  };
  console.log(phoneNumber.length);

  const assignPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="App">
      <div className="modal">
        <h1>User Details Modal</h1>

        <Button onClick={handleOpen} id="shal">
          Open Form
        </Button>
        <div className="modal-content">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Fill Details
              </Typography>
              <form action="post" onSubmit={handleChange}>
                <section>
                  <label htmlFor="">Username: </label>
                  <input
                    type="text"
                    required
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </section>
                <section>
                  <label htmlFor="">Email Address: </label>
                  <input
                    type="email"
                    required
                    id="email"
                    value={emailAd}
                    onChange={(e) => setEmailAd(e.target.value)}
                  />
                </section>
                <section>
                  <label htmlFor="">Phone Number: </label>
                  <input
                    type="tel"
                    required
                    //minLength={10}
                    //pattern="[0-9]{10}"
                    onChange={assignPhoneNumber}
                    id="phone"
                    value={phoneNumber}
                  />
                </section>
                <section>
                  <label htmlFor="">Date Of Birth: </label>
                  <input
                    type="date"
                    required
                    onChange={(e) => setDob(e.target.value)}
                    id="dob"
                    value={dob}
                  />
                </section>
                <button className="submit-button" type="submit">Submit</button>
              </form>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}
