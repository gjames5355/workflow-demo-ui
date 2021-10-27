import { Grid } from '@material-ui/core'
import React from 'react'
import ErrorIcon from '@material-ui/icons/Error'

const TeamStatus = ({params}) => {
    return params.row.status === "Overdue" ? (
        <Grid container alignItems="center">
          {" "}
          <ErrorIcon htmlColor="red" /> {params.row.status}
        </Grid>
      ) : (
        <Grid container alignItems="center">
          {` ${params.row.status}`}
        </Grid>
      )
}

export default TeamStatus
