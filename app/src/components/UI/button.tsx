import React, { forwardRef, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
      primary: "bg-black text-white hover:scale-105 active:scale-95",
      secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
      outline: "border-2 border-black bg-white text-black hover:bg-black hover:text-white",
      ghost: "text-zinc-700 hover:bg-zinc-100",
    }[variant];

    const sizeStyles = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-5 py-2 text-sm",
      lg: "px-7 py-3 text-base",
    }[size];

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
