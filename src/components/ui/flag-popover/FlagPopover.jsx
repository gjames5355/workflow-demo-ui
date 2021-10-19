import Popover from "@material-ui/core/Popover"
import { Box, IconButton } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import FlagIcon from "@material-ui/icons/Flag"
import { styled } from "@material-ui/styles"

const StyledIconButton = styled(IconButton)({
  padding: "2px",
  "border-radius": "5px",
})

const VTFlagPopover = (props) => {
  return (
    <Popover
      open={props.open}
      anchorEl={props.anchor}
      onClose={props.onClose}
      anchorOrigin={{
        vertical: 220,
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
        <Grid alignItems="center">
          <StyledIconButton
            style={{
              border:
                props.task?.priority === "Low" ? `2px solid lightgray` : "none",
            }}
          >
            <FlagIcon htmlColor="lightgray" />
          </StyledIconButton>

          <StyledIconButton
            style={{
              border:
                props.task?.priority === "Medium" ? `2px solid orange` : "none",
            }}
          >
            <FlagIcon htmlColor="orange" />
          </StyledIconButton>

          <StyledIconButton
            style={{
              border:
                props.task?.priority === "High" ? `2px solid red` : "none",
            }}
          >
            <FlagIcon htmlColor="red" />
          </StyledIconButton>
        </Grid>
      </Box>
    </Popover>
  )
}

export default VTFlagPopover
