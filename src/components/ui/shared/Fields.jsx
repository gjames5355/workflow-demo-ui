import { useState, useEffect } from "react"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import RefreshIcon from "@material-ui/icons/Refresh"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Toolbar from "@material-ui/core/Toolbar"

const useStyles = makeStyles((theme) => ({
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    // marginLeft: "25px",
    "&:focus": {
      color: "#A9D1F8",
    },
  },
  button: {
    marginLeft: "auto",
    textTransform: "none",
  },
}))

const Fields = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (e, value) => {
    setValue(value)
  }

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === "/team" && value !== 1) {
      setValue(1)
    } else if (window.location.pathname === "/jobs" && value !== 2) {
      setValue(2)
    } else if (window.location.pathname === "/management" && value !== 3) {
      setValue(3)
    }
  }, [value])

  return (
    <>
      <Toolbar disableGutters>
        <Tabs value={value} onChange={handleChange} indicatorColor="secondary">
          <Tab
            className={classes.tab}
            component={Link}
            to="/"
            label="My Tasks"
          />
          <Tab
            className={classes.tab}
            component={Link}
            to="/team"
            label="Team Tasks"
          />
          <Tab
            className={classes.tab}
            component={Link}
            to="/completed"
            label="Completed Tasks"
          />
        </Tabs>
        <Button
          color="primary"
          className={classes.button}
          startIcon={<RefreshIcon />}
        >
          Refresh Tasks
        </Button>
      </Toolbar>
    </>
  )
}

export default Fields
