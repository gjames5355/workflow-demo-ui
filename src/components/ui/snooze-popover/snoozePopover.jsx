import Popover from "@mui/material/Popover"
import { Box, Button, InputBase, Paper } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Grid from "@mui/material/Grid"
//import FormLabel from "@mui/material/FormLabel"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import Radio from "@mui/material/Radio"
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flex: "1",
  },
  button: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    padding: theme.spacing(0.5),
    textAlign: "center",
  },
}))

const SnoozePopover = (props) => {
  const classes = useStyles()
  return (
    <Popover
      open={props.open}
      anchorEl={props.anchor}
      onClose={props.onClose}
      anchorOrigin={{
        vertical: 180,
        horizontal: "right",
      }}
      style={{
        width: "100%",
        maxHeight: "unset",
        maxWidth: "unset",
      }}
    >
      <Box
        style={{
          padding: "10px",
        }}
        width="280px"
      >
        <Grid container>
          <RadioGroup
            aria-label="gender"
            name="controlled-radio-buttons-group"
            value={1}
          >
            <FormControl component="fieldset">
              <FormControlLabel
                value="snooze"
                control={<Radio />}
                label="Snooze"
              />
              <Grid container spacing={1}>
                <Grid item md={3}>
                  <Button variant="outlined" className={classes.button}>
                    30m
                  </Button>
                </Grid>
                <Grid item md={3}>
                  <Button variant="outlined" className={classes.button}>
                    1h
                  </Button>
                </Grid>
                <Grid item md={3}>
                  <Button variant="outlined" className={classes.button}>
                    3h
                  </Button>
                </Grid>
                <Grid item md={3}>
                  <Button variant="outlined" className={classes.button}>
                    5h
                  </Button>
                </Grid>
              </Grid>
              <FormControlLabel
                value="dueDate"
                control={<Radio />}
                label="Change Due Date"
              />
            </FormControl>

            <FormControl>
              <Grid alignItems="center" container spacing={1}>
                <Grid item>
                  <Paper
                    component="form"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0px 20px",
                    }}
                    elevation={0}
                    variant="outlined"
                  >
                    <InputBase
                      placeholder="Comment"
                      inputProps={{
                        "aria-label": "Comment",
                      }}
                    />
                    <CalendarTodayOutlined color="primary" />
                  </Paper>
                </Grid>
                <Grid>
                  <CheckCircleIcon htmlColor="green" />
                </Grid>
              </Grid>
            </FormControl>
          </RadioGroup>
        </Grid>
      </Box>
    </Popover>
  )
}

export default SnoozePopover
