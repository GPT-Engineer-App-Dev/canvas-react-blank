import { useState } from "react";
import { Box, Button, Flex, Heading, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editEvent, setEditEvent] = useState("");

  const handleAddEvent = () => {
    if (newEvent.trim() !== "") {
      setEvents([...events, newEvent]);
      setNewEvent("");
    }
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  const handleEditEvent = (index) => {
    setEditIndex(index);
    setEditEvent(events[index]);
  };

  const handleUpdateEvent = () => {
    const updatedEvents = events.map((event, index) =>
      index === editIndex ? editEvent : event
    );
    setEvents(updatedEvents);
    setEditIndex(null);
    setEditEvent("");
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading>Events</Heading>
        <Flex>
          <Input
            placeholder="Add new event"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
          />
          <Button ml={2} onClick={handleAddEvent}>
            Add
          </Button>
        </Flex>
        <Stack spacing={3} width="100%">
          {events.map((event, index) => (
            <Flex key={index} justify="space-between" align="center">
              {editIndex === index ? (
                <>
                  <Input
                    value={editEvent}
                    onChange={(e) => setEditEvent(e.target.value)}
                  />
                  <Button ml={2} onClick={handleUpdateEvent}>
                    Update
                  </Button>
                </>
              ) : (
                <>
                  <Link to={`/events/${index}`}>
                    <Text>{event}</Text>
                  </Link>
                  <Box>
                    <Button size="sm" onClick={() => handleEditEvent(index)}>
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      ml={2}
                      onClick={() => handleDeleteEvent(index)}
                    >
                      Delete
                    </Button>
                  </Box>
                </>
              )}
            </Flex>
          ))}
        </Stack>
      </VStack>
    </Box>
  );
};

export default Events;