import Popover from "@material-ui/core/Popover"
import { Box, Button, InputBase, makeStyles, Paper } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import FormLabel from "@material-ui/core/FormLabel"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import Radio from "@material-ui/core/Radio"
import CalendarTodayOutlined from "@material-ui/icons/CalendarTodayOutlined"

const useStyles = makeStyles({
  flexGrow: {
    flex: "1",
  },
  button: {
    backgroundColor: "#fff",
    color: "#3c52b2",
    "&:hover": {
      backgroundColor: "#3c52b2",
      color: "#fff",
    },
  },
})

const VTSnoozePopover = (props) => {
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
          padding: "5px",
        }}
        width="250px"
      >
        <Grid container>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="controlled-radio-buttons-group"
              value={1}
            >
              <FormControlLabel
                value="snooze"
                control={<Radio />}
                label="Znoose"
              />
              <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                  <Button variant="outlined" className={classes.button}>
                    30m
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Button variant="outlined" className={classes.button}>
                    30m
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Button variant="outlined" className={classes.button}>
                    30m
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Button variant="outlined" className={classes.button}>
                    30m
                  </Button>
                </Grid>
              </Grid>
              <FormControlLabel
                value="dueDate"
                control={<Radio />}
                label="Change Due Date"
              />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Data</FormLabel>
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
          </FormControl>
        </Grid>
      </Box>
    </Popover>
  )
}

export default VTSnoozePopover
