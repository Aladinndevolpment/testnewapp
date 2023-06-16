import React, { useContext, useState } from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  Grid,
  Button as MaterialButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { useEditor } from "@craftjs/core";
import { CraftContext } from "@/pages/builder/website/craft";

import lz from "lzutf8";
import copy from "copy-to-clipboard";

export const Topbar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState();
  const [stateToLoad, setStateToLoad] = useState<string | null>(null);

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

        <MaterialButton
          className="copy-state-btn"
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => {
            const json = query.serialize();
            copy(lz.encodeBase64(lz.compress(json)));
            alert("copied");
            // setSnackbarMessage("State copied to clipboard")
          }}
        >
          Copy current state
        </MaterialButton>

        <MaterialButton
          className="load-state-btn"
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => setDialogOpen(true)}
        >
          Load
        </MaterialButton>
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle id="alert-dialog-title">Load state</DialogTitle>
          <DialogContent>
            <TextField
              multiline
              fullWidth
              placeholder='Paste the contents that was copied from the "Copy Current State" button'
              size="small"
              value={stateToLoad}
              onChange={(e) => setStateToLoad(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <MaterialButton
              onClick={() => setDialogOpen(false)}
              color="primary"
            >
              Cancel
            </MaterialButton>
            <MaterialButton
              onClick={() => {
                setDialogOpen(false);
                const json = lz.decompress(lz.decodeBase64(stateToLoad!));
                actions.deserialize(json);
              }}
              color="primary"
              autoFocus
            >
              Load
            </MaterialButton>
          </DialogActions>
        </Dialog>

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
