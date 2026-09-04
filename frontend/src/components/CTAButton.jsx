import { Link } from "react-router-dom";
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

  // Internal links use SPA navigation (no full page reload).
  if (href && href.startsWith("/")) {
    return (
      <Link to={href} className={baseClass} {...props}>
        {icon && <MessageCircle size={20} aria-hidden="true" />}
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={baseClass}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
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
