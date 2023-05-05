import React, { useState, useContext, useRef } from "react";
import FlowBuilder, {
  NodeContext,
  INode,
  IRegisterNode,
  IFlowBuilderMethod,
  IDragComponent,
  BuilderContext,
} from "react-flow-builder";
import {
  DrawerComponent,
  PopconfirmComponent,
  PopoverComponent,
} from "@/components/BuilderWorkflow/antd";
import {
  ArrowPathIcon,
  ArrowUturnLeftIcon,
  LifebuoyIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import ComponentTwo from "@/components/BuilderWorkflow/Components/ComponentTwo";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import ConfigForm from "@/components/BuilderWorkflow/ConfigForm";
import ComponentOne from "@/components/BuilderWorkflow/Components/ComponentOne";
import moment from "moment";

const StartNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return (
    <>
      <ComponentOne />
    </>
  );
};

const EndNodeDisplay: React.FC = ({ nodes }: any) => {
  const node = useContext(NodeContext);
  return (
    <>
      {nodes.length >= "4" ? (
        <button className="flex justify-center items-center rounded-lg border-[1px] border-gray-200 mt-3 text-dark font-medium bg-white px-5 py-3 w-[55%] lg:w-[470px] ">
          <div className="bg-newBlue h-7 w-7 flex justify-center items-center rounded-full mr-2">
            <LifebuoyIcon className="text-white h-5 w-5" />
          </div>
          <span className="text-base"> Workflow done</span>
        </button>
      ) : null}
    </>
  );
};

const NodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);

  return (
    <>
      <ComponentTwo />
    </>
  );
};

const LoopDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return (
    <div
      className={`other-node ${node.configuring ? "node-configuring" : ""} ${
        node.validateStatusError ? "node-status-error" : ""
      }`}
    >
      {node.data ? node.data.name : node.name}
    </div>
  );
};

const ConditionNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return (
    <div
      className={`condition- bg-green-500 ${
        node.configuring ? "node-configuring" : ""
      } ${node.validateStatusError ? "node-status-error" : ""}`}
    >
      {node.data ? node.data.name : node.name}
    </div>
  );
};

const registerNodes: IRegisterNode[] = [
  {
    type: "start",
    name: "Start",
    displayComponent: StartNodeDisplay,
    isStart: true,
    // configComponent: ConfigForm,
  },
  {
    type: "end",
    name: "End",
    displayComponent: EndNodeDisplay,
    isEnd: true,
  },
  {
    type: "node",
    name: "Node",
    displayComponent: NodeDisplay,
    // configComponent: ConfigForm,
  },
  {
    type: "condition",
    name: "Condition",
    displayComponent: ConditionNodeDisplay,
    configComponent: ConfigForm,
  },
  {
    type: "branch",
    name: "If / Else ",
    conditionNodeType: "condition",
  },
  {
    type: "loop",
    name: "Loop",
    displayComponent: NodeDisplay,
    isLoop: true,
  },
];

const defaultNodes = [
  {
    id: "node-0d9d4733-e48c-41fd-a41f-d93cc4718d97",
    type: "start",
    name: "start",
    path: ["0"],
  },
  {
    id: "node-b106675a-5148-4a2e-aa86-8e06abd692d1",
    type: "end",
    name: "end",
    path: ["3"],
  },
];

const DragComponent: React.FC<IDragComponent> = ({
  onDragStart,
  onDragEnd,
}) => {
  const { registerNodes }: any = useContext<any>(BuilderContext);
  const [activeDragBox, setActiveDragBox] = useState<any>(false);

  return (
    <>
      <div className="dropdown dropdown-end hidden md:block fixed right-[15%] lg:right-[6%] mt-8 lg:mt-4">
        <button
          tabIndex={0}
          // onClick={() => setActiveDragBox(!activeDragBox)}
          className="bg-gray-100 p-1 rounded shadow  ml-2 "
        >
          Drag Options
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content menu py-2 px-5 shadow bg-base-100 rounded-box w-40 mt-1"
        >
          {registerNodes
            .filter((item: any) => !item.isStart && !item.isEnd)
            .map((item: any) => (
              <div
                key={item.type}
                className="custom-drag-item mb-2 text-sm"
                draggable
                onDragStart={() => onDragStart(item.type)}
                onDragEnd={onDragEnd}
              >
                {item.name}
              </div>
            ))}
        </ul>
      </div>
    </>
  );
};

const WorkFlowBuilder = () => {
  const [nodes, setNodes] = useState<INode[]>(defaultNodes);

  const handleChange = (nodes: INode[]) => {
    setNodes(nodes);
  };

  const tabs = [
    {
      id: "tab1",
      label: "Flow",
      content: " ",
    },
    {
      id: "tab2",
      label: "Settings",
      content: " ",
    },
    {
      id: "tab3",
      label: "Changes",
      content: " ",
    },
  ];

  const [activeTab, setActiveTab] = useState<any>(tabs[0].id);

  const [undoDisabled, setUndoDisabled] = useState(true);
  const [redoDisabled, setRedoDisabled] = useState(true);
  const [zoom, setZoom] = useState(100);
  const [outDisabled, setOutDisabled] = useState(false);
  const [inDisabled, setInDisabled] = useState(false);

  const ref: any = useRef<IFlowBuilderMethod>(null);
  const handleZoomChange = (outDisabled: any, value: any, inDisabled: any) => {
    setOutDisabled(outDisabled);
    setInDisabled(inDisabled);
    setZoom(value);
  };

  const handleHistoryChange = (undoDisabled: any, redoDisabled: any) => {
    setUndoDisabled(undoDisabled);
    setRedoDisabled(redoDisabled);
  };

  return (
    <>
      <div className="relative bg-mainBg overflow-hidden h-full">
        <div className="bg-darkBlack py-3">
          <header className="  w-full items-center relative z-10 border-b-[1px] border-lightGray">
            <div className="flex flex-center flex-col h-full justify-center lg:mx-auto relative  text-white z-10">
              <div className="flex flex-wrap lg:flex-nowrap justify-between lg:justify-between items-center  relative w-full sm:ml-0 sm:pr-2  ">
                <div className="flex justify-between items-center   md:pl-2 pr-5 py-1.5 rounded-md">
                  <div
                    className={`flex items-center  pl-5  w-full justify-start`}
                  >
                    <ChevronLeftIcon className="h-4 w-4 text-white" />
                    <p
                      className={`ml-3 capitalize text-gray-300   text-xs font-medium  tracking-wide  `}
                    >
                      Back to workflow
                    </p>
                  </div>
                </div>

                <p
                  className={`lg:w-[30%] text-right mr-4 md:mr-0 ml-3 capitalize text-gray-300   text-base font-semibold  tracking-wide  `}
                >
                  Contact based
                </p>
                <div className=" flex items-center justify-start lg:justify-end  lg:p-1     ">
                  <p
                    className={`ml-3   text-gray-400 text-[10px] md:text-xs font-medium  tracking-wide  `}
                  >
                    Last saved : Today at {moment().format("hh:mm a")}
                  </p>
                  <button className="text-xs md:text-sm mx-3  text-gray-300 border-[1px] border-FontGray px-3 py-1.5 rounded-md">
                    Save as draft
                  </button>

                  <button className="mr-3 text-xs md:text-sm text-gray-300 font-medium bg-secondary px-3 py-1.5 rounded-md">
                    Save & publish
                  </button>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="bg-white h-[15vh] md:h-[9vh] px-2">
          <div className="flex flex-wrap lg:flex-nowrap justify-center md:justify-between items-center  relative w-full sm:ml-0 sm:pr-2  ">
            <div className="flex justify-between items-center   pl-2 pr-5 pt-1.5 rounded-md">
              <ul className=" flex  justify-around items-center overflow-auto scrollbar-hide">
                {tabs.map((tab: any) => (
                  <li key={tab.id} className="px-5 ">
                    <button
                      className={` mt-4 md:pb-4 transition-all duration-1000 text-sm lg:text-base md:text-base ${
                        activeTab === tab.id
                          ? "border-b-[4px] border-dark text-dark font-semibold"
                          : "text-gray-500 font-medium border-b-[4px] border-transparent"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className=" flex items-center justify-start lg:justify-end pl-4 md:pl-5 md:p-1 md:pt-6 lg:pt-0 pt-5">
              <button className="mx-3 text-sm text-dark border-[1px] border-gray-400 px-4 md:px-6 py-1.5 rounded-md">
                Test
              </button>

              <div className="dropdown">
                <button
                  tabIndex={0}
                  className="flex justify-center items-center   md:mx-3 text-sm text-dark border-[1px] border-gray-400 px-4 py-1.5 rounded-md"
                >
                  <span>Action</span>
                  <ChevronDownIcon className="h-4 w-4 ml-2" />
                </button>

                <div
                  tabIndex={0}
                  className="dropdown-content card card-compact w-44 py-2 px-4 shadow bg-white text-dark"
                >
                  <div>
                    <div className="flex justify-start items-start py-2">
                      <input
                        type="checkbox"
                        name="1"
                        className="checkbox checkbox-sm rounded-sm bg-transparent"
                      />
                      <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">
                        Data A
                      </p>
                    </div>
                    <div className="flex justify-start items-start py-2">
                      <input
                        type="checkbox"
                        name="2"
                        className="checkbox checkbox-sm rounded-sm bg-transparent"
                      />
                      <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">
                        Data B
                      </p>
                    </div>
                    <div className="flex justify-start items-start py-2">
                      <input
                        type="checkbox"
                        name="3"
                        className="checkbox checkbox-sm rounded-sm bg-transparent"
                      />
                      <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">
                        Data C
                      </p>
                    </div>

                    <div className="flex justify-start items-start py-2">
                      <input
                        type="checkbox"
                        name="6"
                        className="checkbox checkbox-sm rounded-sm bg-transparent"
                      />
                      <p className=" text-[13px] font-medium  ml-2 mt-[-0.5px]">
                        Data D
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="mx-3 text-sm text-secondary border-[1px] border-secondary px-4 py-1.5 rounded-md">
                Set Your Goal
              </button>
            </div>
          </div>
        </div>
        <div className="relative scrollbar-hide h-[82%] pb-20 bg-gradient-to-br from-gray-200 to-transparent bg-repeat bg-cover bg-opacity-50 bg-dots overflow-y-scroll">
          <div className="h-full  w-full">
            <div className="px-4 md:px-8 w-full">
              <div className="bg-gradient-to-r from-[#fdebe8] via-[#fcd4c9] to-[#feece7] rounded-md flex justify-center items-center py-3 mt-5">
                <TrophyIcon className="h-5 w-5 text-dark mr-2" />
                <p className="text-dark font-semibold text-xs md:text-sm">
                  Lets set goal for your workflow first!
                </p>
                <p className="text-secondary font-semibold text-xs md:text-sm ml-2">
                  See your goals
                </p>
              </div>
            </div>
            <div className="flex flex-col fixed top-[38%] md:top-[30%] left-5 lg:left-10 z-50">
              <button
                disabled={inDisabled}
                onClick={() => ref.current.zoom("in")}
                className="bg-gray-200 p-1 rounded shadow"
              >
                <PlusIcon className="w-5 h-5" />
              </button>
              <button
                disabled={outDisabled}
                onClick={() => ref.current.zoom("out")}
                className="bg-gray-200 p-1 rounded shadow mt-2"
              >
                <MinusIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col fixed top-[38%] md:top-[30%] right-5 md:right-10 z-50">
              <button
                disabled={undoDisabled}
                onClick={() => ref.current.history("undo")}
                className={` ${
                  undoDisabled
                    ? "bg-gray-100 text-FontGray"
                    : "bg-gray-300 text-dark"
                }   p-1 rounded shadow} `}
              >
                <ArrowUturnLeftIcon className="w-5 h-5" />
              </button>
              <button
                disabled={redoDisabled}
                onClick={() => ref.current.history("redo")}
                className={` ${
                  redoDisabled
                    ? "bg-gray-100 text-FontGray mt-2"
                    : "bg-gray-300 text-dark mt-2"
                }   p-1 rounded shadow  } `}
              >
                <ArrowPathIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="h-full mt-20 lg:mt-0">
              <FlowBuilder
                ref={ref}
                historyTool={{
                  hidden: true,
                  max: 5,
                }}
                nodes={nodes}
                onChange={handleChange}
                zoomTool={{
                  hidden: true,
                  min: 10,
                  max: 150,
                  step: 25,
                }}
                onZoomChange={handleZoomChange}
                registerNodes={registerNodes}
                onHistoryChange={handleHistoryChange}
                DrawerComponent={DrawerComponent}
                PopoverComponent={PopoverComponent}
                PopconfirmComponent={PopconfirmComponent}
                lineColor="#8f8f8f"
                showArrow={true}
                draggable
                DragComponent={DragComponent}
                // showPracticalBranchNode={true}
                layout="vertical"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkFlowBuilder;
