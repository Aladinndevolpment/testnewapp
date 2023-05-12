import { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

const initialItems = [
  { id: "item-1", content: "Item 1" },
  { id: "item-2", content: "Item 2" },
  { id: "item-3", content: "Item 3" },
  { id: "item-4", content: "Item 4" },
  { id: "item-5", content: "Item 5" },
];

const Example: React.FC = ({}) => {
  const [items, setItems] = useState(initialItems);

  const [isBrowser, setIsBrowser] = useState(false);

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    )
      return;

    if (source.droppableId == "active") {
      console.log(destination.index);

      let actives = activeTodos;
      [actives[source.index], actives[destination.index]] = [
        actives[destination.index],
        actives[source.index],
      ];
      setActiveTodos(actives);
    } else if (destination.droppableId == "active") {
      setActiveTodos([...activeTodos, backlogTodos[source.index]]);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    // event.preventDefault();
    // const newItem = {
    //   id: `item-${items.length + 1}`,
    //   content: event.dataTransfer.getData("text"),
    // };
    // setItems([...items, newItem]);
  };

  const [backlogTodos, setBacklogTodos] = useState<
    { id: string; name: string; size: "3" | "6" | "12" }[]
  >([
    { id: "1", name: "new 1", size: "3" },
    { id: "2", name: "new 2", size: "6" },
    { id: "3", name: "new 3", size: "12" },
  ]);

  const [activeTodos, setActiveTodos] = useState<
    { id: string; name: string; size: "3" | "6" | "12" }[]
  >([
    { id: "11", name: "new 11", size: "3" },
    { id: "12", name: "new 12", size: "6" },
    { id: "13", name: "new 13", size: "3" },
  ]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-wrap">
        <div className="w-3/12 p-2">
          <Droppable droppableId={"backlog"}>
            {(droppableProvided, droppableSnapshot) => (
              <div
                className={`bg-blue-400 px-5 py-3 rounded-md ${
                  droppableSnapshot.isDraggingOver ? "opacity-80" : ""
                }`}
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
              >
                <span className="text-white text-2xl font-semibold">
                  Elements
                </span>
                {backlogTodos?.map((todo, index) => (
                  <div key={index}>
                    <Draggable
                      draggableId={`backlog-${todo.id.toString()}`}
                      index={index}
                      key={index}
                    >
                      {(draggableProvided, draggableSnapshot) => (
                        <form
                          className="flex rounded-md bg-yellow-300  w-full p-[20px] mt-[15px] transition hover:scale-105 hover:shadow-md"
                          {...draggableProvided.draggableProps}
                          {...draggableProvided.dragHandleProps}
                          ref={draggableProvided.innerRef}
                        >
                          {todo.name}
                        </form>
                      )}
                    </Draggable>
                  </div>
                ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div className="w-9/12 p-2">
          <Droppable droppableId={"active"}>
            {(droppableProvided, droppableSnapshot) => (
              <div
                className={`bg-blue-400 px-5 py-3 rounded-md ${
                  droppableSnapshot.isDraggingOver ? "opacity-80" : ""
                }`}
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
              >
                <span className="text-white text-2xl font-semibold">
                  Active
                </span>
                <div className="flex flex-wrap">
                  {activeTodos?.map((element, index) => (
                    <div
                      className={`${
                        element.size === "3"
                          ? "w-3/12"
                          : element.size === "6"
                          ? "w-6/12"
                          : "w-full"
                      } p-2`}
                      key={index}
                    >
                      <Draggable
                        draggableId={`active-${index}}`}
                        index={index}
                        key={index}
                      >
                        {(draggableProvided, draggableSnapshot) => (
                          <div
                            className="flex rounded-md bg-yellow-300  w-full p-[20px] mt-[15px] transition hover:scale-105 hover:shadow-md"
                            {...draggableProvided.draggableProps}
                            {...draggableProvided.dragHandleProps}
                            ref={draggableProvided.innerRef}
                          >
                            {element.name}
                          </div>
                        )}
                      </Draggable>
                    </div>
                  ))}
                  {droppableProvided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

export default Example;
