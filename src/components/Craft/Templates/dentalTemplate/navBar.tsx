import { Text } from "../../widgets/Text/Text";
import { useNode, Element, useEditor } from "@craftjs/core";
import {
  baseDefaults,
  CommonSettings,
  getCommonSettingsProps,
  ICommonSettingsProps,
} from "../../widgets/CommonSettings";
import { createElement } from "react";

const elementName = "NavBar";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 10,
};

interface INavBarsProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const NavBarsText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

NavBarsText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const NavBar = ({
  size,
  backgroundColor = defaults.backgroundColor,
  borderRadius = defaults.borderRadius,
  borderColor = defaults.borderColor,
  borderType = "border-solid",
  borderWidth = baseDefaults.borderWidth,
  marginTop = baseDefaults.marginTop,
  marginBottom = baseDefaults.marginBottom,
  marginLeft = baseDefaults.marginLeft,
  marginRight = baseDefaults.marginRight,
  paddingTop = baseDefaults.paddingTop,
  paddingBottom = baseDefaults.paddingBottom,
  paddingLeft = baseDefaults.paddingLeft,
  paddingRight = baseDefaults.paddingRight,
  shadow,
  shadowColor,
}: INavBarsProps) => {
  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  return (
    <div className="bg-white p-2 w-full" ref={(ref: any) => connect(drag(ref))}>
      {/* <div className="card card-compact w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <Element id="heroImage" is={CardImage} canvas>
            <BuilderImage />
          </Element>
        </div>
      </div> */}
      <div
        className={`w-full h-auto ${size} mr-2 ${
          hovered && "hover:outline-pink-500 hover:outline "
        }  relative ${shadowColor} ${shadow} ${borderType} `}
        style={{
          backgroundColor,
          marginTop: `${marginTop}px`,
          marginBottom: `${marginBottom}px`,
          marginLeft: `${marginLeft}px`,
          marginRight: `${marginRight}px`,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
          borderWidth: `${borderWidth}px`,
          borderRadius: `${borderRadius}px`,
          borderColor,
        }}
      >
        {hovered && (
          <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] px-1 z-10 capitalize">
            {elementName}
          </div>
        )}
        <Element id="NavBarsText" is={NavBarsText} canvas>
          <div className=" flex justify-between">
            {/* <div className="navbar-start w-[30%]  "> */}
            <div
              className={` navbar-start w-[30%] h-auto ${size} mr-2 ${
                hovered && "hover:outline-pink-500 hover:outline "
              }  relative ${shadowColor} ${shadow} ${borderType} `}
              style={{
                backgroundColor,
                marginTop: `${marginTop}px`,
                marginBottom: `${marginBottom}px`,
                marginLeft: `${marginLeft}px`,
                marginRight: `${marginRight}px`,
                paddingTop: `${paddingTop}px`,
                paddingBottom: `${paddingBottom}px`,
                paddingLeft: `${paddingLeft}px`,
                paddingRight: `${paddingRight}px`,
                borderWidth: `${borderWidth}px`,
                borderRadius: `${borderRadius}px`,
                borderColor,
              }}
            >
              <div className="flex-none">
                {/* <TbDental size={50} /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-dental"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                  <path d="M12 5.5c-1.074 -.586 -2.583 -1.5 -4 -1.5c-2.1 -.001 -4 1.247 -4 5c0 4.899 1.056 8.41 2.671 10.537c.573 .756 1.97 .521 2.567 -.236c.398 -.505 .819 -1.439 1.262 -2.801c.292 -.771 .892 -1.504 1.5 -1.5c.602 .004 1.21 .737 1.5 1.5c.443 1.362 .864 2.295 1.262 2.8c.597 .759 1.994 .993 2.567 .237c1.615 -2.127 2.671 -5.637 2.671 -10.537c0 -3.74 -1.908 -4.994 -4 -5c-1.423 -.004 -2.92 .911 -4 1.5z" />{" "}
                  <path d="M12 5.5l3 1.5" />{" "}
                </svg>
                <Text
                  alignment="right"
                  text="Dental Care"
                  fontSize={25}
                  bold="font-medium"
                  color="#000000"
                />
              </div>
            </div>
            <div className="navbar-end w-[70%] flex justify-end">
              <div className="flex-col  justify-center items-center mx-2">
                <div>
                  <Text
                    alignment="left"
                    text="+91 00-000-000"
                    fontSize={15}
                    bold="font-semibold"
                    color="#000000"
                  />
                  <Text
                    alignment="left"
                    text="24/7 EMERGENCY CALL"
                    fontSize={8}
                    bold="font-medium"
                    color="#000000"
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-center w-auto">
                <div className="flex-col justify-between items-center">
                  <div>
                    <Text
                      alignment="right"
                      text="Monday-Friday"
                      fontSize={15}
                      bold="font-bold"
                      color="#000000"
                    />
                  </div>
                  <div>
                    <Text
                      alignment="right"
                      text="9:30 AM -6:30 PM"
                      fontSize={12}
                      bold="font-medium"
                      color="#000000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar bg-base-100 border-t mt-2 flex justify-between ">
            <div className="navbar-start border-r w-auto ">
              <div className="flex-none">
                <ul className="menu menu-horizontal z-10">
                  <li>
                    <a>
                      <Text
                        alignment="right"
                        text="About"
                        fontSize={17}
                        bold="font-medium"
                        color="#000000"
                      />
                    </a>
                    <ul className="bg-base-100 z-10">
                      <li>
                        <a>
                          <Text
                            alignment="right"
                            text="General Info"
                            fontSize={17}
                            bold="font-medium"
                            color="#000000"
                          />
                        </a>
                      </li>
                      <li>
                        <a>
                          <Text
                            alignment="right"
                            text="Team"
                            fontSize={17}
                            bold="font-medium"
                            color="#000000"
                          />
                        </a>
                      </li>
                      <li>
                        <a>
                          <Text
                            alignment="right"
                            text="Doctor ' Profile"
                            fontSize={17}
                            bold="font-medium"
                            color="#000000"
                          />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li tabIndex={0}>
                    <a>
                      <Text
                        alignment="right"
                        text="Services"
                        fontSize={17}
                        bold="font-medium"
                        color="#000000"
                      />
                    </a>
                    <ul className="bg-base-100 z-10">
                      <li>
                        <a>
                          <Text
                            alignment="right"
                            text=" Single Service"
                            fontSize={17}
                            bold="font-medium"
                            color="#000000"
                          />{" "}
                        </a>
                      </li>
                      <li>
                        <a>
                          <Text
                            alignment="right"
                            text="FAQ"
                            fontSize={17}
                            bold="font-medium"
                            color="#000000"
                          />
                        </a>
                      </li>
                      <li>
                        <a>
                          <Text
                            alignment="right"
                            text="Solution"
                            fontSize={17}
                            bold="font-medium"
                            color="#000000"
                          />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <Text
                        alignment="right"
                        text="Pages"
                        fontSize={17}
                        bold="font-medium"
                        color="#000000"
                      />
                    </a>
                    <ul className="bg-base-100 z-10">
                      <li>
                        <a>
                          <Text
                            alignment="right"
                            text="Process"
                            fontSize={17}
                            bold="font-medium"
                            color="#000000"
                          />
                        </a>
                      </li>
                      <li>
                        <a>
                          <Text
                            alignment="right"
                            text="Company History"
                            fontSize={17}
                            bold="font-medium"
                            color="#000000"
                          />
                        </a>
                      </li>
                      <li>
                        <a>
                          <Text
                            alignment="right"
                            text="Cost Calculator"
                            fontSize={17}
                            bold="font-medium"
                            color="#000000"
                          />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <Text
                        alignment="right"
                        text="Portfolio"
                        fontSize={17}
                        bold="font-medium"
                        color="#000000"
                      />
                    </a>
                    <ul className="bg-base-100 z-10">
                      <li>
                        <a>
                          <Text
                            alignment="right"
                            text="Portfolio List"
                            fontSize={17}
                            bold="font-medium"
                            color="#000000"
                          />
                        </a>
                      </li>
                      <li>
                        <a>
                          <Text
                            alignment="right"
                            text="Portfolio Grid"
                            fontSize={17}
                            bold="font-medium"
                            color="#000000"
                          />
                        </a>
                      </li>
                      <li>
                        <a>
                          <Text
                            alignment="right"
                            text="Additional"
                            fontSize={17}
                            bold="font-medium"
                            color="#000000"
                          />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <Text
                        alignment="right"
                        text="News"
                        fontSize={17}
                        bold="font-medium"
                        color="#000000"
                      />
                    </a>
                    <ul className="bg-base-100 z-10">
                      <li>
                        <a>
                          <Text
                            alignment="right"
                            text="News Tiles"
                            fontSize={17}
                            bold="font-medium"
                            color="#000000"
                          />
                        </a>
                      </li>
                      <li>
                        <a>
                          <Text
                            alignment="right"
                            text="Latest Update"
                            fontSize={17}
                            bold="font-medium"
                            color="#000000"
                          />
                        </a>
                      </li>
                      <li>
                        <a>
                          <Text
                            alignment="right"
                            text="Social Media Updates"
                            fontSize={17}
                            bold="font-medium"
                            color="#000000"
                          />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-end w-[20%] flex justify-end p-0">
              <div>
                <button className="btn btn-ghost btn-circle">
                  {/* <BsSearch size={20} /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
                  </svg>
                </button>
              </div>
              <div>
                <button className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    {/* <AiOutlineShoppingCart size={20} /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-cart-check"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />{" "}
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />{" "}
                    </svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </Element>
      </div>
    </div>
  );
};

const NavBarsSettings = () => {
  const {
    actions: { setProp },
    props,
    id,
    data,
  } = useNode((node) => ({
    props: node.data.props,
    data: node.data,
  }));

  const { state } = useEditor((state) => {
    return { state };
  });

  const textNodeSettings =
    state.nodes[state.nodes[data.linkedNodes["NavBarsText"]].data.nodes[0]]
      .related.settings;
  return (
    <div>
      <CommonSettings />

      {textNodeSettings && createElement(textNodeSettings)}
    </div>
  );
};

NavBar.craft = {
  related: {
    settings: NavBarsSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 0,
    marginBottom: 0,
  },
  displayName: elementName,
};
