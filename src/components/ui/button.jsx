import React from "react";

const baseStyles =
  "inline-flex items-center rounded-full justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none";

const variantClasses = {
  default: "bg-black text-white hover:bg-black",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-gray-300 bg-white text-black hover:bg-gray-100",
  secondary: "bg-gray-100 text-black hover:bg-gray-200 rounded-full",
  ghost: "bg-transparent text-black hover:bg-gray-100",
  link: "text-blue-600 underline-offset-4 hover:underline",
};

const sizeClasses = {
  default: "h-9 px-4 py-2",
  sm: "h-9 px-2 py-2",
  lg: "h-10 px-6 py-2",
  icon: "w-9 h-9 p-0",
};

function Button({
  className = "",
  variant = "default",
  size = "default",
  children,
  ...props
}) {
  const variantStyle = variantClasses[variant] || variantClasses.default;
  const sizeStyle = sizeClasses[size] || sizeClasses.default;

  return (
    <button
      className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
