import { Input } from "../components";
import useForm from "../hooks/useForm";
import { validateEmail, validatePassword } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../utils/constants";
import { useDispatch } from "react-redux";
import { openAlert } from "../redux/features/base";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  cpassword: "",
};

let tempPass = "";
let tempCPass = "";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fname" in fieldValues) {
      temp.fname = fieldValues.fname ? "" : "Firstname is required";
    }
    if ("lname" in fieldValues) {
      temp.lname = fieldValues.lname ? "" : "Lastname is required";
    }
    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "email is required";
      temp.email = validateEmail(fieldValues.email) ? "" : "Invalid email";
    }
    if ("password" in fieldValues) {
      if (validatePassword(fieldValues.password)) {
        temp.password = "";
        tempPass = fieldValues.password;
        temp.password = temp.cpassword = tempCPass
          ? tempPass === tempCPass
            ? ""
            : "Password does not match"
          : "";
      } else {
        temp.password = "Password should be alpha-numeric must contain atleast 6 character";
      }
    }
    if ("cpassword" in fieldValues) {
      if (validatePassword(fieldValues.cpassword)) {
        temp.cpassword = "";
        tempCPass = fieldValues.cpassword;
        temp.cpassword = temp.password = tempPass
          ? tempPass === tempCPass
            ? ""
            : "Password does not match"
          : "";
      } else {
        temp.cpassword = "Password should be alpha-numeric must contain atleast 6 character";
      }
    }

    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const { errors, setErrors, values, handleInputChange } = useForm(initialValues, true, validate);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(
        openAlert({
          alertMessage: "Registered successfully.",
          alertType: "success",
          alertTitle: "Success",
        })
      );
      setTimeout(() => {
        navigate(ROUTE_PATH.PRODUCTS);
      }, 1500);
    } else {
      dispatch(
        openAlert({
          alertMessage: "Some error occured.",
          alertType: "error",
          alertTitle: "Failed",
        })
      );
    }
  };
  return (
    <div className="p-4 flex justify-center xs:items-center md:items-start xs:flex-col md:flex-row xs:w-full lg:w-4/5 mx-auto">
      <div className="flex flex-col mb-2 sm:mr-10">
        <b className="text-4xl mb-3">Signup</b>
        <p className="font-semibold">We do not share your personal details with anyone</p>
      </div>
      <div className="flex flex-col xs:w-full md:w-auto justify-center items-center">
        <form noValidate onSubmit={handleSubmit} className="w-full">
          <Input
            type="text"
            label="First Name"
            name="fname"
            value={values.fname}
            error={errors.fname}
            onChange={handleInputChange}
            placeholder="Enter Firstname"
          />
          <Input
            type="text"
            label="Last Name"
            name="lname"
            value={values.lname}
            error={errors.lname}
            onChange={handleInputChange}
            placeholder="Enter Lastname"
          />
          <Input
            type="email"
            label="Email"
            name="email"
            value={values.email}
            error={errors.email}
            onChange={handleInputChange}
            placeholder="Enter Email"
          />
          <Input
            type="password"
            label="Password"
            name="password"
            value={values.password}
            error={errors.password}
            onChange={handleInputChange}
            placeholder="Enter Password"
          />
          <Input
            type="password"
            label="Confirm Password"
            name="cpassword"
            value={values.cpassword}
            error={errors.cpassword}
            onChange={handleInputChange}
            placeholder="Confirm Password"
          />
          <button className="w-full bg-pink-600 text-white p-3">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
