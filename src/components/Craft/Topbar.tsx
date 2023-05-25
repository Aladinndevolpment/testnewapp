import React, { useContext } from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  Grid,
  Button as MaterialButton,
} from "@mui/material";
import { useEditor } from "@craftjs/core";
import { CraftContext } from "@/pages/builder/craft";

export const Topbar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const { setDevice } = useContext(CraftContext);

  return (
    <div className="py-2 border-b bg-white flex">
      {/* <button className="" onClick={() => setDevice("mobile")}>
        mobile
      </button>
      <button className="" onClick={() => setDevice("desktop")}>
        desktop
      </button> */}

      <Grid container alignItems="center">
        <Grid item xs>
          <FormControlLabel
            control={
              <Switch
                checked={enabled}
                onChange={(_, value) =>
                  actions.setOptions((options) => (options.enabled = value))
                }
              />
            }
            label="Enable"
          />
        </Grid>
        <Grid item>
          <MaterialButton
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => {
              console.log(query.serialize());
            }}
          >
            Serialize JSON to console
          </MaterialButton>
        </Grid>
      </Grid>
    </div>
  );
};
