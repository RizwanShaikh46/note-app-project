import React from 'react';
import './App.css';
import Appbar from './Appbar'
import Grid from '@material-ui/core/Grid'
import EditNote from './EditNote'
import CreateNote from './CreateNote'
import 'firebase/firestore'
import  firebase from './firebase'
function App() {
const [notes, setNotes] = React.useState([])
const [newNoteText, setNewNoteText] = React.useState()

  

React.useEffect(() => {
    const db = firebase.firestore()
    const unsubscribe = db.collection('notes')
    .onSnapshot((snapshot) => {
      const notesData = []
      snapshot.forEach(doc => notesData.push(({...doc.data(), id: doc.id})))
      setNotes(notesData)
    })   
  return unsubscribe
}, [])

const onCreate = () => {
  const db = firebase.firestore()
  db.collection('notes').add({text: newNoteText})
  setNewNoteText('')
}

const handleNoteChange = (event) => {
  setNewNoteText(event.target.value)
}

  return (
    <Grid container direction="column">
      <Grid item>
      <Appbar />
      </Grid>
      <CreateNote 
       newNoteText={newNoteText}
       handleNoteChange={handleNoteChange}
       onCreate={onCreate}
      />
      {notes.map(note => <EditNote 
      key={note.id}
      note={note}
      />
      )}
    </Grid>
 );
}

export default App;
