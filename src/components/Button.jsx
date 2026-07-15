import clsx from 'clsx'

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-glow',
    secondary:
      'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border',
    ghost: 'hover:bg-secondary/50 text-foreground',
    outline:
      'border-2 border-primary text-primary hover:bg-primary/10',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl',
  }

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
