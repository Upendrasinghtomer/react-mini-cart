import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAlert } from "../redux/features/base";

const alertTypes = {
  success: "bg-green-500 shadow-green-500",
  error: "bg-red-500 shadow-red-500",
  warning: "bg-yellow-500 shadow-yellow-500",
  info: "bg-blue-500 shadow-blue-500",
};

export default function Alert() {
  const alert = useSelector((state) => state.base);
  const dispatch = useDispatch();
  useEffect(() => {
    const timeOut = setTimeout(() => dispatch(closeAlert()), 3000);
    return () => {
      if (timeOut) {
        clearTimeout(timeOut);
      }
    };
  }, [alert.showAlert]);

  const classes = alertTypes[alert.alertType];
  return (
    alert.showAlert && (
      <div
        className={`${classes} shadow-sm text-white px-4 py-3 rounded md:fixed right-1 z-50 top-1 xs:w-full md:w-96`}
        role="alert"
      >
        <strong className="font-bold">{alert.alertTitle} ! </strong>
        <span className="block sm:inline"> {alert.alertMessage}</span>
        <span
          aria-label="close alert"
          className="absolute top-0 bottom-0 right-0 px-4 py-3"
          onClick={() => dispatch(closeAlert())}
        >
          <svg
            className="fill-current h-6 w-6 text-white"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    )
  );
}
