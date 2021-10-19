import Popover from "@material-ui/core/Popover"
import Typography from "@material-ui/core/Typography"
import { Box } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import Item from "@material-ui/core/Grid"
import FormLabel from "@material-ui/core/FormLabel"
import FormGroup from "@material-ui/core/FormGroup"
import SendIcon from "@material-ui/icons/Send"
import { InputBase, Paper } from "@material-ui/core"

const VTTaskPopover = (props) => {
  return (
    <Popover
      open={props.open}
      anchorEl={props.anchor}
      onClose={props.onClose}
      anchorOrigin={{
        vertical: 120,
        horizontal: "right",
      }}
      style={{
        width: "100%",
        maxHeight: "unset",
        maxWidth: "unset",
      }}
    >
      <Box padding="15px" width="250px">
        <Item item xs>
          <Typography component="subtitle1">{props.task?.taskName}</Typography>
        </Item>
        <Item>
          <FormLabel>Data</FormLabel>
        </Item>
        <Item >
          <Paper
            component="form"
            variant="outlined"
            style={{
                display: "flex",
                alignItems: "end",   
                padding: "5px 10px"             
            }}
          >
            <InputBase
              multiline={true}
              minRows={4}              
              placeholder="Comment"
              inputProps={{
                "aria-label": "Comment",
              }}
              
            />
            <SendIcon color="primary" />
          </Paper>
        </Item>

        <Box paddingTop="15px" height="300px" width="250px">
          <Grid
            spacing={2}
            style={{
              paddingBottom: "15px",
            }}
          >
            <FormGroup style={{
                padding: "5px 0px"
            }}>
              <FormLabel>Data</FormLabel>
              <TextField label="Comment" variant="filled" />
            </FormGroup>
            <FormGroup style={{
                padding: "5px 0px"
            }}>
              <FormLabel>Data</FormLabel>
              <TextField label="Comment" variant="filled" />
            </FormGroup>
            <FormGroup style={{
                padding: "5px 0px"
            }}>
              <FormLabel>Data</FormLabel>
              <TextField label="Comment" variant="filled" />
            </FormGroup>
            <FormGroup style={{
                padding: "5px 0px"
            }}>
              <FormLabel>Data</FormLabel>
              <TextField label="Comment" variant="filled" />
            </FormGroup>
          </Grid>
        </Box>
      </Box>
    </Popover>
  )
}

export default VTTaskPopover
