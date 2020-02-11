import React from 'react';
import { Grid, Checkbox } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const itemsToDo = [
    {"hour": "8"},
    {"hour": "9"},
    {"hour": "10"},
    {"hour": "11"},
    {"hour": "12"},
    {"hour": "13"},
    {"hour": "14"},
    {"hour": "15"},
    {"hour": "16"},
];

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    grid: {
        alignItems: "center",
        alignContent: "center",
        justify: "center"
    }
}));

function List() {
    return(
        <ul>
            {itemsToDo.map(item =>
                <ListItem hour={item.hour}></ListItem>
            )}
        </ul>
    );
}

function ListItem(props) {
    const classes = useStyles();
    const storageContents = JSON.parse(localStorage.getItem(props.hour))
    const startingText = (storageContents) ? storageContents.text : "";
    const startingCheck = (storageContents) ? storageContents.checked : false;

    const [text, setText] = React.useState(startingText);
    const handleChange = event => {
        setText(event.target.value);
    };

    const [checked, setChecked] = React.useState(startingCheck);
    const handleCheck = event => {
        setChecked(event.target.checked);
    };

    React.useEffect(() => {
        localStorage.setItem(props.hour, JSON.stringify({text, checked}));
    });

    return(
        <Grid className={classes.grid} container spacing={2}>
            <Grid className={classes.grid} item xs={10}>
                <TextField
                    value={text} 
                    onChange={handleChange}
                    id="outlined-basic"
                    className={classes.textField}
                    label={props.hour}
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid className={classes.grid} item xs={2}>
                <Checkbox
                    color="primary"
                    checked={checked}
                    onChange={handleCheck}
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
            </Grid>
        </Grid>
    );
}

export default List;