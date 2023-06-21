import { Text } from "../../widgets/Text/Text";
import { useNode, Element } from "@craftjs/core";
import {
  baseDefaults,
  ICommonSettingsProps,
} from "../../widgets/CommonSettings";

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
          <div className="navbar bg-base-100 flex justify-between">
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
            <div className="navbar-end w-[70%] flex justify-between">
              <div className="flex justify-center items-center w-[50%]">
                <button className="btn btn-ghost btn-circle">
                  {/* <FiPhoneCall className="" size={30} /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    className="bi bi-telephone-outbound"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />{" "}
                  </svg>
                </button>
                <div>
                  <Text
                    alignment="right"
                    text="+91 00-000-000"
                    fontSize={15}
                    bold="font-semibold"
                    color="#000000"
                  />
                  <Text
                    alignment="right"
                    text="24/7 EMERGENCY CALL"
                    fontSize={8}
                    bold="font-medium"
                    color="#000000"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center w-auto">
                <button className="btn btn-ghost btn-circle mr-1">
                  {/* <FaBriefcaseMedical className="" size={30} /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20,6h-4V4c0-1.1-0.9-2-2-2h-4C8.9,2,8,2.9,8,4v2H4C2.9,6,2,6.9,2,8v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8 C22,6.9,21.1,6,20,6z M10,4h4v2h-4V4z M16,15h-3v3h-2v-3H8v-2h3v-3h2v3h3V15z" />
                  </svg>
                </button>
                <div className="flex-col justify-between items-center">
                  <div>
                    <Text
                      alignment="right"
                      text="Monday-Friday"
                      fontSize={18}
                      bold="font-bold"
                      color="#000000"
                    />
                  </div>
                  <div>
                    <Text
                      alignment="right"
                      text="9:30-6:30"
                      fontSize={17}
                      bold="font-medium"
                      color="#000000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar bg-base-100 border-t">
            <div className="navbar-start">
              <div className="flex-none">
                <ul className="menu menu-horizontal">
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
                    <ul className="bg-base-100">
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
                    <ul className="bg-base-100">
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
                    <ul className="bg-base-100">
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
                    <ul className="bg-base-100">
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
                    <ul className="bg-base-100">
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
            <div className="navbar-end">
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
        </Element>
      </div>
    </div>
  );
};

NavBar.craft = {
  displayName: "navBar",
};
