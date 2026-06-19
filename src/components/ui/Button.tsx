import * as React from "react";

export const buttonVariants = ({ variant = "default", size = "default", className = "" }: { variant?: "default" | "outline" | "ghost", size?: "default" | "sm" | "lg" | "icon", className?: string }) => {
  let baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 font-display uppercase tracking-wider";
  
  let variants = {
    default: "bg-accent text-white hover:bg-accent-hover shadow-sm",
    outline: "border border-accent text-accent hover:bg-accent/10",
    ghost: "hover:bg-accent/10 hover:text-accent",
  };
  
  let sizes = {
    default: "h-12 px-6 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-14 rounded-md px-8 text-lg",
    icon: "h-12 w-12",
  };

  return `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
)
Button.displayName = "Button"
