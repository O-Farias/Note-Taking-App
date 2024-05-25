import React from "react";
import { VStack } from "@chakra-ui/react";
import NoteItem from "./NoteItem";

const NoteList = ({
  notes,
  deleteNote,
  editNote,
  archiveNote,
  isArchived = false,
}) => {
  console.log("NoteList component rendering with notes:", notes);

  return (
    <VStack spacing={4} w="100%">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          editNote={editNote}
          archiveNote={archiveNote}
          isArchived={isArchived}
        />
      ))}
    </VStack>
  );
};

export default NoteList;
