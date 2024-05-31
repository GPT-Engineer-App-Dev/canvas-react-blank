import { useParams } from "react-router-dom";
import { useState } from "react";
import { Box, Button, Flex, Heading, Input, Stack, Text, VStack } from "@chakra-ui/react";

const EventDetails = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading>Event Details - {id}</Heading>
        <Flex>
          <Input
            placeholder="Add new comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button ml={2} onClick={handleAddComment}>
            Add Comment
          </Button>
        </Flex>
        <Stack spacing={3} width="100%">
          {comments.map((comment, index) => (
            <Flex key={index} justify="space-between" align="center">
              <Text>{comment}</Text>
            </Flex>
          ))}
        </Stack>
      </VStack>
    </Box>
  );
};

export default EventDetails;