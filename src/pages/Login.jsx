import { Input } from "../components";
import useForm from "../hooks/useForm";
import { validateEmail, validatePassword } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../utils/constants";
import { useDispatch } from "react-redux";
import { openAlert } from "../redux/features/base";

const initialValues = {
  email: "",
  password: "",
};
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "email is required";
      temp.email = validateEmail(fieldValues.email) ? "" : "Invalid email";
    }
    if ("password" in fieldValues) {
      temp.password = validatePassword(fieldValues.password)
        ? ""
        : "Password should be alpha-numeric must contain atleast 6 character";
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
          alertMessage: "logged in successfully.",
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
        <b className="text-4xl mb-3">Login</b>
        <p className="font-semibold">Get access to you Orders, Wishlist and Recommendations</p>
      </div>
      <div className="flex flex-col xs:w-full md:w-auto justify-center items-center">
        <form onSubmit={handleSubmit} className="w-full" noValidate>
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
          <button type="submit" className="w-full bg-pink-600 text-white p-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
