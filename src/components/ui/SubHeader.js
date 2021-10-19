import { makeStyles } from '@material-ui/core';
import React from 'react';
import WorkLoadBar from './WorkLoadBar';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        width: '100%'
    },
    subHeaderRight: {
        width: '50%',
        display:'flex'
    },
    subHeaderLeft: {
        width: '50%'
    },
    workLoadBar: {
        width: '50%'
    },
    workLoadTitle: {

    },
}))

const SubHeader = (props) => {
    const styles = useStyles();
    return (
        <div className={styles.container}>
            <div className={styles.subHeaderLeft}></div>
            <div className={styles.subHeaderRight}>
                <div className={styles.workLoadBar}></div>
                <div className={styles.workLoadBar}>
                    <WorkLoadBar />
                </div>
            </div>
        </div>
    )
}

export default SubHeader
