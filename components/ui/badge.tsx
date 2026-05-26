interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "sale";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles = {
    default: "bg-brown-100 text-brown-800",
    sale: "bg-red-50 text-red-600",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
