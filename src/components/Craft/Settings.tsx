import React from "react";

import { useEditor } from "@craftjs/core";
import { Chip } from "@mui/material";

export const SettingsPanel = () => {
  const { actions, selected } = useEditor((state, query) => {
    //@ts-ignore
    const [currentNodeId] = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
    };
  });

  return selected ? (
    <div className="bg-white w-full">
      <div className="p-4 w-full">
        <div>
          <div className="flex flex-wrap justify-between pb-2 border-b mb-3">
            <div>
              <p>Selected</p>
            </div>
            <div>
              <Chip size="small" color="primary" label={selected.name} />
            </div>
          </div>
        </div>

        <div className="w-full pb-2 border-b mb-3">
          {selected.settings && React.createElement(selected.settings)}
        </div>

        {selected.isDeletable ? (
          <button
            onClick={() => {
              actions.delete(selected.id);
            }}
            className="btn absolute bottom-20 bg-red-600 btn-xs capitalize"
          >
            Delete
          </button>
        ) : null}
      </div>
    </div>
  ) : null;
};
