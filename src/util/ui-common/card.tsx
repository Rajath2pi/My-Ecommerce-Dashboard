import React from "react";
import classNames from "classnames";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={classNames(
        "rounded-lg border shadow-sm p-4 dark:border-gray-700", // Tailwind styles with dark mode
        className
      )}
      {...props}
    />
  );
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div className={classNames("p-2", className)} {...props} />
  );
}
