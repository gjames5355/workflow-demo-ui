import { Grid } from "@material-ui/core"
import React from "react"
import ErrorIcon from "@material-ui/icons/Error"

const TeamStatus = ({ params }) => {
  return params.row.taskStatus === "Overdue" ? (
    <Grid container alignItems="center">
      {" "}
      <ErrorIcon htmlColor="red" /> {params.row.taskStatus}
    </Grid>
  ) : (
    <Grid container alignItems="center">
      {` ${params.row.taskStatus}`}
    </Grid>
  )
}

export default TeamStatus
