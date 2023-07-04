// import { useNode, Element } from "@craftjs/core";

import { useNode, Element, useEditor } from "@craftjs/core";

import { Banner } from "../Templates/dentalTemplate/banner";
import { CardBottomNew } from "../Templates/dentalTemplate/cardBottom";
import { CardHeader } from "../Templates/dentalTemplate/cardHeader";
import { CardBanner, CardImage } from "../Templates/dentalTemplate/cards";
import { FooterWeb } from "../Templates/dentalTemplate/footer";
import { NavBar } from "../Templates/dentalTemplate/navBar";
import { Team } from "../Templates/dentalTemplate/team";
import { WebTestimonial } from "../Templates/dentalTemplate/webTestimonial";

export const TemplateOneTopSection = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

TemplateOneTopSection.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => true),
  },
};

export const TemplateOneSection = ({ padding = 20 }) => {
  const {
    connectors: { connect, drag },
  }: any = useNode();

  const tbStyles = {
    backgroundColor: "#fff",
    borderColor: "#d9d6d6",
    borderWidth: 1,
  };

  return (
    <div
      className="bg-[#ffffff] py-5 w-full"
      ref={(ref: any) => connect(drag(ref))}
    >
      <div className=" ">
        <Element id="text" is={TemplateOneTopSection} canvas>
          <NavBar />
          <Banner />
          <CardHeader />
          <CardBanner />
          <WebTestimonial />
          <CardBottomNew />
          <Team />
          <FooterWeb />
        </Element>
      </div>
    </div>
  );
};

TemplateOneSection.craft = {
  displayName: "TemplateOne",
};
