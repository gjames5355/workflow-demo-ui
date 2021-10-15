import Button from "@material-ui/core/Button"
import { makeStyles, alpha } from "@material-ui/core/styles"
import RefreshIcon from "@material-ui/icons/Refresh"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

const useStyles = makeStyles((theme) => ({
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    // marginLeft: "25px",
  },
  button: {
    marginLeft: "auto",
    textTransform: "none",
  },
}))

const Fields = () => {
  const classes = useStyles()

  return (
    <>
      <Tabs>
        <Tab className={classes.tab} label="My Tasks" />
        <Tab className={classes.tab} label="Team Tasks" />
        <Tab className={classes.tab} label="Jobs" />
        <Tab className={classes.tab} label="Team Management" />
        <Button color="primary" className={classes.button}>
          <RefreshIcon /> Refresh
        </Button>
      </Tabs>
    </>
  )
}

export default Fields
