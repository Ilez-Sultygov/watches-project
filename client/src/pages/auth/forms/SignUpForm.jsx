import React, { useState } from "react";
import UserValidator from "../../../../entities/user/User.validator";
import UserApi from "../../../../entities/user/UserApi";
import { useNavigate } from "react-router";

const INITIAL_INPUTS_DATA = {
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
};

export default function SignUpForm({ setUser }) {
  const [inputs, setInputs] = useState(INITIAL_INPUTS_DATA);
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmitHandler = async (event) =>
}
