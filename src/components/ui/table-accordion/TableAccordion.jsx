import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import React from 'react';
import DataTable from '../shared/DataTable';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const TableAccordion = (props) => {
    return (
        <Accordion className={props.classes.accordion} defaultExpanded={true}>
            <AccordionSummary
                className={props.classes.summary}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={props.classes.title}>{props.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className={props.classes.details}>
                <DataTable type={props.type} data={props.data} handleChange={props.handleChange} />
            </AccordionDetails>
        </Accordion>
    )
}

export default TableAccordion;
