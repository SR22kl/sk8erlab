import { ReactNode } from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: string;
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
};

export function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  const Component = Comp as any;

  return (
    <Component
      className={clsx(
        "px-6 py-[clamp(4rem,8vw,8rem)] [.header+&]:pt-44 [.header+&]:md:pt-32",
        className,
      )}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Component>
  );
}
