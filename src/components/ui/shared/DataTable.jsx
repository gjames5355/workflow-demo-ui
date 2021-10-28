import React, { useContext, useEffect, useState } from "react"
import { DataGrid } from "@material-ui/data-grid"
import { GlobalContext } from "../../../context/GlobalContext"
import { PERSONAL_TASKS, TABLE_COLUMNS, GROUP_TASKS } from "../../../constants/constants"
import Actions from "../actions/Actions"
import { useLocation } from "react-router"
import TeamStatus from "../team-status/TeamStatus"
import SearchIcon from "@material-ui/icons/Search"
import { InputBase, makeStyles, alpha } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black , 0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginBottom: 10,
    width: "20%",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(3em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}))

const DataTable = ({ type, data }) => {
  const { setCount } = useContext(GlobalContext)
  const location = useLocation();
  const [columns, setColumns] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const classes = useStyles();

  useEffect(() => {
    const tableType = location.pathname === '/team' ? 'team' : 'personal';
    const cols = [...TABLE_COLUMNS];
    const actions = {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => <Actions params={params} />
    };
  
    const teamStatus = {
      field: "status",
      headerName: "Status",
      width: 200,
      editable: false,
      renderCell: (params) => <TeamStatus params={params} />,
    }

    const assignedTo = {
      field: "assignedTo",
      headerName: "Assigned To",
      width: 200,
      editable: false,
    }

    if (tableType === 'personal') {
      setColumns([...cols, actions])
    } else {
      cols.splice(17, 0, teamStatus);
      setColumns([...cols, assignedTo, actions]);
    }
  }, [location])

  const handleSelectRow = (e) => {
    setCount(e.length)
  }

  const handleInputChange = e => {
    setInputValue(e.target.value);
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          value={inputValue}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          onChange={handleInputChange}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        onColumnOrderChange
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={handleSelectRow}
      />
    </div>
  )
}

export default DataTable;
