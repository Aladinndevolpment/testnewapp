import React from "react";
import { Draggable } from "react-beautiful-dnd";
import QuoteList from "../styles/list";

const Column = (props: any) => {
  const title = props.title;
  const quotes = props.quotes;
  const index = props.index;

  return (
    <Draggable draggableId={title} index={index}>
      {(provided, snapshot) => (
        <div
          className={`container bg-[#f5f7fb] min-w-[250px] relative overflow-y-scroll scrollbar-hide ${
            snapshot.isDragging && "bg-[#e3fcef]"
          }`}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <header
            className={`shadow sticky top-0 p-2 bg-[#f5f7fb]`}
            //   isDragging={snapshot.isDragging}
          >
            <div
              //   isDragging={snapshot.isDragging}
              {...provided.dragHandleProps}
              aria-label={`${title} quote list`}
              className="bg-white p-2  rounded-md  ring-1 ring-gray-200 shadow-md"
            >
              {title}
            </div>
          </header>
          <QuoteList
            listId={title}
            listType="QUOTE"
            quotes={quotes}
            internalScroll={props.isScrollable}
            isCombineEnabled={Boolean(props.isCombineEnabled)}
            useClone={Boolean(props.useClone)}
          />
        </div>
      )}
    </Draggable>
  );
};

export default Column;
