import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import React from 'react';
import DataTable from '../DataTable/DataTable';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const TableAccordion = ({
  classes,
  title,
  type,
  data,
  handleChange,
  setData,
  allData,
}) => {
  return (
    <Accordion className={classes.accordion} defaultExpanded={true}>
      <AccordionSummary
        className={classes.summary}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.title}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <DataTable
          setData={setData}
          type={type}
          data={data}
          handleChange={handleChange}
          allData={allData}
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default TableAccordion
