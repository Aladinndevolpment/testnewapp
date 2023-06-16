import React from "react";

import { useEditor } from "@craftjs/core";
import { Chip } from "@mui/material";
import { MdDeleteForever } from "react-icons/md";

export const SettingsPanel = () => {
  const { actions, selected } = useEditor((state, query) => {
    //@ts-ignore
    const [currentNodeId] = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.displayName,
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

  // console.log(selected?.settings);
  return selected ? (
    <div className="bg-white w-full">
      <div className="p-4 w-full">
        <div>
          <div className="flex flex-wrap justify-between items-center pb-2 border-b mb-3">
            <div>
              <p className="text-lg font-semibold text-dark">{selected.name}</p>
            </div>
            <div className="gap-1 flex items-center">
              {selected?.name != "App" && selected.isDeletable ? (
                <button
                  onClick={() => {
                    actions.delete(selected.id);
                  }}
                  className="bg-secondary hover:bg-newBlue duration-300 py-2 px-2 text-white rounded-[3px] flex flex-wrap justify-between items-center"
                >
                  <MdDeleteForever className="h-4 w-5" />
                </button>
              ) : null}
            </div>
          </div>
        </div>

        <div className="w-full pb-2 mb-3">
          {selected.settings && React.createElement(selected.settings)}
        </div>
      </div>
    </div>
  ) : null;
};
