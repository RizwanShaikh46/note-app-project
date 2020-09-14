import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'


const CreateNote = (props) => {


    return (
        <div style={{marginTop: 70}}>
      <Grid container direction="column" spacing={3}>  
      <Grid container>
       <Grid item sm={2}></Grid> 
      <Grid item sm={8}>
      <TextField
        id="outlined-multiline-static"
        label="Create Note"
        multiline
        value={props.newNoteText}
        rows={4}
        placeholder="Enter Note"
        variant="outlined"
        onChange={(event) => props.handleNoteChange(event)}
        fullWidth
      />
      </Grid>
      <Grid item sm={2}></Grid>
      </Grid>
      <Grid item>
      <Grid container>
       <Grid item sm={2}></Grid> 
       <Grid item>
        <Button 
        variant="contained" 
        color="primary"
        onClick={props.onCreate}
      >Add Note
      </Button>
      </Grid>
      </Grid>
      </Grid>
      </Grid>
      </div>
    )
}
export default CreateNote