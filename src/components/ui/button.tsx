// src/components/ui/button.tsx
import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles = {
  default: 'bg-blue-500 text-white hover:bg-blue-600',
  outline: 'border border-blue-500 text-blue-500 hover:bg-blue-100',
  ghost: 'bg-transparent text-blue-500 hover:bg-blue-100',
};

const sizeStyles = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-3',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        'rounded transition duration-200 font-medium',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </button>
  );
};
