import PropTypes from "prop-types";

function Button({ children, variant = "primary" }) {
  const baseClasses = "px-4 py-2 rounded font-semibold";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",
  };

  return <button className={`${baseClasses} ${variantClasses[variant]}`}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
