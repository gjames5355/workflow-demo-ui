import Popover from "@material-ui/core/Popover"
import { Box, IconButton } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import FlagIcon from "@material-ui/icons/Flag"

const VTFlagPopover = (props) => {
  return (
    <Popover
      open={props.open}
      anchorEl={props.anchor}
      onClose={props.onClose}
      anchorOrigin={{
        vertical: 200,
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
      >
        <Grid>
          <IconButton>
            <FlagIcon htmlColor="lightgray" />
          </IconButton>

          <IconButton>
            <FlagIcon htmlColor="orange" />
          </IconButton>

          <IconButton
            style={{
              border: "2px solid red",
              padding: "2px",
              "border-radius": "5px",
            }}
          >
            <FlagIcon htmlColor="red" />
          </IconButton>
        </Grid>
      </Box>
    </Popover>
  )
}

export default VTFlagPopover
