import { useNode } from "@craftjs/core";
import { ReactNode } from "react";
import Container from "./Container";

interface IAppProps {
  children: ReactNode;
}

export default function App({ children }: IAppProps) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <Container>
      <div
        ref={(ref: any) => connect(drag(ref))}
        className="bg-[#f5f7f9] min-h-16 h-auto"
      >
        {children}
      </div>
    </Container>
  );
}
