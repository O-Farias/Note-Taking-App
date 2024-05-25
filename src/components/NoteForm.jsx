import React, { useState } from "react";
import { Box, Input, Button, VStack } from "@chakra-ui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NoteForm = ({ addNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      console.log("NoteForm handleSubmit:", noteText);
      addNote({ id: Date.now(), text: noteText });
      setNoteText("");
    } else {
      console.log("Note text is empty");
      toast.error("Note text cannot be empty!");
    }
  };

  console.log("NoteForm component rendering");

  return (
    <Box as="form" onSubmit={handleSubmit} w="100%">
      <VStack spacing={2}>
        <Input
          placeholder="Enter your note"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          size="lg"
          borderColor="teal.400"
          _focus={{ borderColor: "teal.600" }}
        />
        <Button type="submit" colorScheme="teal" size="lg" width="full">
          Add Note
        </Button>
      </VStack>
    </Box>
  );
};

export default NoteForm;
