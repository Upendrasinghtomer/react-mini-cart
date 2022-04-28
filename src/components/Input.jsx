export default function Input({ type, onChange, placeholder, value, error, name, label }) {
  return (
    <div className="floating-input mb-5 relative xs:w-full md:w-72">
      <input
        type={type}
        id={name}
        onChange={onChange}
        name={name}
        value={value}
        className={`border-2 ${
          error ? "border-red-500 focus:border-red-500" : "border-gray-500 focus:border-cyan-600"
        } focus:outline-none  border-t-0 border-l-0 b border-r-0 focus:shadow-sm w-full p-3 h-16`}
        placeholder={placeholder}
      />
      {error && <span className="text-red-500">{error} </span>}
      <label
        htmlFor={name}
        className={`absolute  ${
          error ? "text-red-500" : "text-gray-500"
        } top-0 left-0 px-3 py-5 h-full font-semibold pointer-events-none transform origin-left transition-all duration-100 ease-in-out `}
      >
        {label}
      </label>
    </div>
  );
}
