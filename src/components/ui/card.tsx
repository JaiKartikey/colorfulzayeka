import React from 'react';
import clsx from 'clsx'; // Make sure to install this: `npm install clsx`

type Variant = 'default' | 'outline' | 'ghost';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
};

export function Card({ children, className = '', variant = 'default' }: CardProps) {
  const baseStyles = 'rounded-lg shadow-sm bg-white';
  const variantStyles: Record<Variant, string> = {
    default: '',
    outline: 'border border-gray-200',
    ghost: 'bg-transparent shadow-none',
  };

  return <div className={clsx(baseStyles, variantStyles[variant], className)}>{children}</div>;
}

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={clsx('card-header', className)} {...props}>
    {children}
  </div>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={clsx('card-content', className)} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, className = '', ...props }) => (
  <h3 className={clsx('card-title text-xl font-semibold', className)} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ children, className = '', ...props }) => (
  <p className={clsx('card-description text-sm text-gray-600', className)} {...props}>
    {children}
  </p>
);
