import React from "react";
import { Box, Text, IconButton, HStack } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { FaEdit, FaArchive, FaInbox } from "react-icons/fa";

const NoteItem = ({ note, deleteNote, editNote, archiveNote, isArchived }) => {
  console.log("NoteItem component rendering with note:", note);

  return (
    <Box
      p={4}
      borderWidth={1}
      borderRadius="lg"
      w="100%"
      boxShadow="sm"
      _hover={{ boxShadow: "md" }}
      transition="box-shadow 0.2s"
    >
      <HStack justify="space-between" align="center">
        <Text>{note.text}</Text>
        <HStack spacing={2}>
          {!isArchived && (
            <IconButton
              icon={<FaEdit />}
              onClick={() => editNote(note.id)}
              variant="outline"
              colorScheme="blue"
              aria-label="Edit note"
            />
          )}
          <IconButton
            icon={isArchived ? <FaInbox /> : <FaArchive />}
            onClick={() => archiveNote(note.id)}
            variant="outline"
            colorScheme={isArchived ? "green" : "yellow"}
            aria-label={isArchived ? "Unarchive note" : "Archive note"}
          />
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => deleteNote(note.id)}
            variant="outline"
            colorScheme="red"
            aria-label="Delete note"
          />
        </HStack>
      </HStack>
    </Box>
  );
};

export default NoteItem;
