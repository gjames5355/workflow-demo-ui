import React, { useState } from "react"
import IconButton from "@material-ui/core/IconButton"
import FlagIcon from "@material-ui/icons/Flag"
import ChatBubbleIcon from "@material-ui/icons/ChatBubble"
import TodayIcon from "@material-ui/icons/Today"
import GroupsIcon from "@material-ui/icons/Group"
import VTTaskPopover from "../task-popover/TaskPopover"
import SnoozePopover from "../snooze-popover/SnoozePopover"
import VTFlagPopover from "../flag-popover/FlagPopover"
import ReassignPopover from "../reassign-popover/ReassignPopover"

const Actions = ({ params }) => {
  const [selectedTask, setSelectedTask] = useState({
    open: false,
    openSnooze: false,
    openFlag: false,
    openAssign: false,
  })

  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorElSnooze, setAnchorElSnooze] = useState(null)
  const [anchorElFlag, setAnchorElFlag] = useState(null)

  const closeModal = () => {
    setSelectedTask({
      task: undefined,
      open: false,
      openSnooze: false,
      openAssign: false,
    })
    setAnchorEl(null)
    setAnchorElSnooze(null)
    setAnchorElFlag(null)
  }

  const onCommentHandler = (event) => {
    setSelectedTask({
      open: true,
      task: params.row,
    })
    setAnchorEl(event.currentTarget)
  }

  const onSnoozeHandler = (event) => {
    setSelectedTask({
      openSnooze: true,
      task: params.row,
    })
    setAnchorElSnooze(event.currentTarget)
  }

  const onFlagHandler = (event) => {
    setSelectedTask({
      openFlag: true,
      task: params.row,
    })
    setAnchorEl(event.currentTarget)
  }

  const onGroupIconClick = (e) => {
    setSelectedTask((prev) => ({
      ...prev,
      openAssign: true,
      task: params.row,
    }))
    setAnchorEl(e.currentTarget)
  }

  return (
    <div>
      <VTTaskPopover
        task={selectedTask.task}
        open={selectedTask.open}
        anchorE1={anchorEl}
        onClose={closeModal}
      ></VTTaskPopover>
      <SnoozePopover
        task={selectedTask.task}
        open={selectedTask.openSnooze}
        anchorE1={anchorElSnooze}
        onClose={closeModal}
      ></SnoozePopover>
      <VTFlagPopover
        task={selectedTask.task}
        open={selectedTask.openFlag}
        anchorE1={anchorElFlag}
        onClose={closeModal}
      ></VTFlagPopover>
      <ReassignPopover
        isOpen={selectedTask.openAssign}
        anchor={anchorEl}
        onClose={closeModal}
      />
      <IconButton onClick={onFlagHandler} style={{ color: "red" }}>
        <FlagIcon />
      </IconButton>
      <IconButton onClick={onCommentHandler}>
        <ChatBubbleIcon style={{ color: "#104B67" }} />
      </IconButton>
      <IconButton onClick={onSnoozeHandler}>
        <TodayIcon style={{ color: "#104B67" }} />
      </IconButton>
      <IconButton onClick={onGroupIconClick}>
        <GroupsIcon style={{ color: "#104B67" }} />
      </IconButton>
    </div>
  )
}

export default Actions
