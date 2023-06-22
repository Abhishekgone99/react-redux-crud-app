import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../Redux/actions";

const EditUser = () => {
  const { user } = useSelector((state) => state.usersData);
  // console.log("edit user", user);
  const disptach = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log("useparams", id);

  useEffect(() => {
    disptach(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
    //  console.log(user);
  }, [user]);

  const [error, setError] = useState("");
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const { name, email, contact, address } = state;

  const onchangeHandler = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !address) {
      setError("Please fill all the input fields");
    } else {
      disptach(updateUser(state, id));
      navigate("/");
      setError("");
    }
  };
  return (
    <div>
      <Button
        variant="contained"
        color="error"
        style={{ margin: "30px 0", width: "20ch" }}
        type="submit"
        onClick={() => navigate("/")}
      >
        Go back
      </Button>
      <h1>EditUser</h1>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1.5, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={updateHandler}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name || ""}
          onChange={onchangeHandler}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email || ""}
          onChange={onchangeHandler}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Contact"
          variant="outlined"
          type="number"
          name="contact"
          value={contact || ""}
          onChange={onchangeHandler}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          type="text"
          name="address"
          value={address || ""}
          onChange={onchangeHandler}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "30px 0", width: "20ch" }}
          type="submit"
        >
          Update
        </Button>
      </Box>
    </div>
  );
};

export default EditUser;
