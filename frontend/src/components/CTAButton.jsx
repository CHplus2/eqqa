import { MessageCircle } from "lucide-react";

export function CTAButton({
  href,
  children,
  variant = "primary",
  icon = true,
  className = "",
  ...props
}) {
  const baseClass = `btn ${variant === "primary" ? "btn-primary" : variant === "secondary" ? "btn-secondary" : "btn-ghost"} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass} {...props}>
        {icon && <MessageCircle size={20} aria-hidden="true" />}
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={baseClass} {...props}>
      {icon && <MessageCircle size={20} aria-hidden="true" />}
      {children}
    </button>
  );
}
