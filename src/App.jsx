import React, { useState } from "react";
import { Box, Container, VStack, Heading } from "@chakra-ui/react";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import Footer from "./components/Footer";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toastStyles.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);

  console.log("App component rendering");

  const addNote = (note) => {
    console.log("Adding note:", note);
    setNotes([...notes, note]);
    toast.success("Note added successfully!");
  };

  const deleteNote = (id) => {
    console.log("Deleting note with id:", id);
    setNotes(notes.filter((note) => note.id !== id));
    toast.error("Note deleted successfully!");
  };

  const editNote = (id) => {
    console.log("Editing note with id:", id);
    const newText = prompt("Edit your note:");
    if (newText) {
      setNotes(
        notes.map((note) =>
          note.id === id ? { ...note, text: newText } : note
        )
      );
      toast.info("Note edited successfully!");
    }
  };

  const archiveNote = (id) => {
    console.log("Archiving note with id:", id);
    const noteToArchive = notes.find((note) => note.id === id);
    setNotes(notes.filter((note) => note.id !== id));
    setArchivedNotes([...archivedNotes, noteToArchive]);
    toast.success("Note archived successfully!");
  };

  const unarchiveNote = (id) => {
    console.log("Unarchiving note with id:", id);
    const noteToUnarchive = archivedNotes.find((note) => note.id === id);
    setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
    setNotes([...notes, noteToUnarchive]);
    toast.success("Note unarchived successfully!");
  };

  return (
    <Container maxW="container.md" p={4} centerContent>
      <ToastContainer />
      <Box mb={8} textAlign="center">
        <Header />
        <ThemeToggleButton />
      </Box>
      <VStack spacing={4} w="100%" alignItems="center">
        <NoteForm addNote={addNote} />
        <Heading as="h2" size="lg" mb={4} textAlign="center">
          Notes
        </Heading>
        <NoteList
          notes={notes}
          deleteNote={deleteNote}
          editNote={editNote}
          archiveNote={archiveNote}
        />
        <Heading as="h2" size="lg" mb={4} mt={8} textAlign="center">
          Archived Notes
        </Heading>
        <NoteList
          notes={archivedNotes}
          deleteNote={deleteNote}
          editNote={editNote}
          archiveNote={unarchiveNote}
          isArchived
        />
      </VStack>
      <Footer />
    </Container>
  );
}

export default App;
