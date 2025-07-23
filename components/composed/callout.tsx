import * as React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { Info, Lightbulb, AlertTriangle, XCircle } from "lucide-react";

type CalloutType = "info" | "tip" | "warning" | "error";

const calloutStyles: Record<
  CalloutType,
  {
    icon: React.ReactNode;
    className: string;
    descriptionClassName: string;
    titleClassName?: string;
  }
> = {
  info: {
    icon: <Info className="text-current" />,
    className:
      "border-[color:var(--color-accent)] bg-[color:var(--color-card)] text-[color:var(--color-accent)]",
    descriptionClassName: "text-[color:var(--color-foreground)]",
    titleClassName: "text-[color:var(--color-accent)]",
  },
  tip: {
    icon: <Lightbulb className="text-current" />,
    className:
      "border-[color:var(--color-secondary)] bg-[color:var(--color-card)] text-[color:var(--color-secondary)]",
    descriptionClassName: "text-[color:var(--color-foreground)]",
    titleClassName: "text-[color:var(--color-secondary)]",
  },
  warning: {
    icon: <AlertTriangle className="text-current" />,
    className:
      "border-[color:var(--color-chart-4)] bg-[color:var(--color-card)] text-[color:var(--color-chart-4)]",
    descriptionClassName: "text-[color:var(--color-destructive-foreground)]",
    titleClassName: "text-[color:var(--color-chart-4)]",
  },
  error: {
    icon: <XCircle className="text-current" />,
    className:
      "border-[color:var(--color-destructive)] bg-[color:var(--color-card)] text-[color:var(--color-destructive)]",
    descriptionClassName: "text-[color:var(--color-destructive-foreground)]",
    titleClassName: "text-[color:var(--color-destructive)]",
  },
};

type CalloutProps = React.ComponentProps<typeof Alert> & {
  type?: CalloutType;
};

export function Callout({
  type = "info",
  title,
  children,
  className,
  ...props
}: CalloutProps) {
  const style = calloutStyles[type];
  return (
    <Alert className={cn(style.className, "my-4", className)} {...props}>
      {style.icon}
      {title && (
        <AlertTitle className={cn(style.titleClassName, "font-bold")}>
          {title}
        </AlertTitle>
      )}
      {children && (
        <AlertDescription className={style.descriptionClassName}>
          {children}
        </AlertDescription>
      )}
    </Alert>
  );
}
