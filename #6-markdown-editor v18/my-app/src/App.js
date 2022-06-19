import React from "react";
import ReactDOM from 'react-dom/client';

import Sidebar from "./Components/Sidebar.js";
import Editor from "./Components/Editor.js";
import Split from "react-split";
import {nanoid} from "nanoid";
import { data } from "./data.js";

import './styles.css';
import Dev from './Components/Dev.js';
import Default from './Components/Default.js';

import "react-mde/lib/styles/css/react-mde-all.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

export default function App() {
    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) || [])
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )

    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
        setNotes(oldNotes => {
            const newArray = [];
            for(let i=0; i<oldNotes.length; i++){
                const oldNote = oldNotes[i];
                if(oldNote.id === currentNoteId){
                    newArray.unshift({...oldNote, body: text});
                } else {
                    newArray.push(oldNote);
                }
            }
            return newArray;
        })
    }

    function deleteNote(event, noteID) {
        event.stopPropagation();
        setNotes(oldNotes => 
            oldNotes.filter(note => note.id !== noteID)    
        )
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    const [DevLink, setDevLink] = React.useState(false);
    function toggleDevLink() {
        setDevLink(prevVal => !prevVal);
    }
    
    return (
        <Router>
        <main>
        {
            DevLink ?
                <div className="dev-page">
                    <div className="dev-page-div">
                        <div className="dev-page-route">
                            <Routes>
                                <Route path="/" element={<Default/>}></Route>
                                <Route path="/dev" element={<Dev/>}></Route>
                            </Routes>
                        </div>
                        <div className="dev-link">
                            <Link to={"/"} onClick={toggleDevLink} className='dev-link-text'>• back •</Link>
                        </div>
                    </div>
                </div>
            :
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1 className="no-notes-h1">You have no notes</h1>
                <div className="first-note-button">
                    <button 
                        className="first-note" 
                        onClick={createNewNote}>
                        Create one now
                    </button>
                </div>

                <div className="dev-link">
                    <Link to={"/dev"} onClick={toggleDevLink} className='dev-link-text'>• dev •</Link>
                    <Routes>
                        <Route path="/" element={<Default/>}></Route>
                        <Route path="/dev" element={<Dev/>}></Route>
                    </Routes>
                </div>
            </div>
            
        }
        </main>
        </Router>
    )
}