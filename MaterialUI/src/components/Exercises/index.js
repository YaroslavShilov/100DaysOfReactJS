import React from "react";
import Grid from "@material-ui/core/Grid";
import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 },
};

export default (props) => {
  return (
    <Grid container sm={12} spacing={2}>
      <Grid item sm>
        <LeftPane styles={styles} />
      </Grid>
      <Grid item sm>
        <RightPane styles={styles} />
      </Grid>
    </Grid>
  );
};
