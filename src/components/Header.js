import React from 'react';
import { Grid, Button } from "@material-ui/core";
import RefreshIcon from '@material-ui/icons/Refresh';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    grid: {
        alignItems: "center",
        alignContent: "center",
        justify: "center"
    }
}));

const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload(false);
}

function Header() {
    const classes = useStyles();
    let options = {year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options)
    return (
        <Grid className={classes.grid} container spacing={2}>
            <Grid className={classes.grid} item xs={10}><h1>{today}</h1></Grid>
            <Grid className={classes.grid} item xs={2}>
                <Button variant="outlined" 
                        color="primary"
                        onClick={clearLocalStorage}>
                    <RefreshIcon></RefreshIcon>
                </Button>
            </Grid>
        </Grid>
    );
}

export default Header;