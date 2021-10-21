import Popover from "@mui/material/Popover"
import Typography from "@mui/material/Typography"
import { Box } from "@mui/material"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Item from "@mui/material/Grid"
import FormLabel from "@mui/material/FormLabel"
import FormGroup from "@mui/material/FormGroup"
import SendIcon from "@mui/icons-material/Send"
import { InputBase, Paper } from "@mui/material"

const VTTaskPopover = (props) => {
  return (
    <Popover
      open={props?.open}
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
          <Typography component="h6">{props.task?.taskName}</Typography>
        </Item>
        <Item>
          <FormLabel>Comment</FormLabel>
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
              <FormLabel>Process Name</FormLabel>
              <TextField placeholder="Process Name" variant="filled" value={props.task?.processName}>
                
              </TextField>
            </FormGroup>
            <FormGroup style={{
                padding: "5px 0px"
            }}>
              <FormLabel>Priority</FormLabel>
              <TextField placeholder="Priority" value={props.task?.priority} variant="filled" />
                
            </FormGroup>
            <FormGroup style={{
                padding: "5px 0px"
            }}>
              <FormLabel>Division</FormLabel>
              <TextField variant="filled" value={props.task?.division} />
            </FormGroup>
            <FormGroup style={{
                padding: "5px 0px"
            }}>
              <FormLabel>Child Division</FormLabel>
              <TextField variant="filled" value={props.task?.childDivision} />
            </FormGroup>
          </Grid>
        </Box>
      </Box>
    </Popover>
  )
}

export default VTTaskPopover
