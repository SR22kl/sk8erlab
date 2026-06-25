import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  children: React.ReactNode;
  className?: string;
};

export function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-heading uppercase",
        size === "xl" &&
          "text-[clamp(2.25rem,6vw,5rem)] leading-[clamp(2.5rem,6.5vw,5.5rem)]",
        size === "lg" &&
          "text-[clamp(2rem,5vw,4.5rem)] leading-[clamp(2.25rem,5.5vw,5rem)]",
        size === "md" &&
          "text-[clamp(1.75rem,4vw,3rem)] leading-[clamp(2rem,4.5vw,3.5rem)]",
        size === "sm" &&
          "text-[clamp(1.5rem,3vw,2.25rem)] leading-[clamp(1.75rem,3.5vw,2.75rem)]",
        size === "xs" &&
          "text-[clamp(1.125rem,2vw,1.5rem)] leading-[clamp(1.5rem,2.5vw,2rem)]",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
