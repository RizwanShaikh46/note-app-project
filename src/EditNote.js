import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import SaveIcon from '@material-ui/icons/Save';
import InputAdornment from '@material-ui/core/InputAdornment';
import firebase from './firebase'
import 'firebase/firestore'

const useStyles = makeStyles({
    root: {
        marginTop: 20
    },
    textFieldContainer: {
        padding: 5
    }
});

const EditNote = (props) => {
    const classes = useStyles()
    const [text, setText] = React.useState(props.note.text)

   const onUpdate = () => {
      const db = firebase.firestore()
      db.collection('notes').doc(props.note.id).set({...props.note, text})
   }

    const onDelete = () => {
     const db = firebase.firestore()
     db.collection('notes').doc(props.note.id).delete()
    }

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item sm={2}></Grid>
                <Grid item sm={8}>
                    <Card>
                        <div className={classes.textFieldContainer}>
                            <TextField
                                id="outlined-multiline-static"
                                rows={4}
                                placeholder="Start Editing"
                                variant="outlined"
                                value={text}
                                onChange={(e) => {setText(e.target.value)}}
                                InputProps={{
                                    endAdornment: <InputAdornment>
                                        <IconButton 
                                          size="medium" 
                                          color="primary"
                                          onClick={onUpdate}
                                          >
                                            <SaveIcon />
                                        </IconButton>
                                        <IconButton 
                                          size="medium"
                                          color="secondary"
                                          onClick={onDelete}
                                          >
                                            <DeleteIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }}
                                fullWidth
                                multiline
                            />
                        </div>
                    </Card>
                </Grid>
                <Grid item sm={2}></Grid>
            </Grid>
        </div>
    )

}

export default EditNote