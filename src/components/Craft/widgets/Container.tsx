import { useNode } from "@craftjs/core";
import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

export default function Container({ children }: IContainerProps) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={(ref: any) => connect(drag(ref))} className="border-orange-500">
      {children}
    </div>
  );
}
