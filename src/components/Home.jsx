import { useEffect, useState } from "react";
import { TextField, IconButton, Box, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const location = useLocation();
  //   console.log("location.state", location);

  const handleSendMessage = () => {
    console.log("prompt");

    if (message.trim() !== "") {
      const newMessage = {
        text: message,
        // sender: messages.length % 2 === 0 ? "You" : "Perplexity", // Alternate between two persons
        sender: "You", // Alternate between two persons
      };
      messages.push(newMessage);
      setMessage("");

      getAiResponse();
      console.log("messages", messages);
    }
  };

  const getAiResponse = () => {
    console.log("getAiResponse");

    setTimeout(() => {
      const newAiMsg = {
        text: "This is Response from AI",
        sender: "Perplexity",
      };
      setMessages([...messages, newAiMsg]);
    }, 1000);

    console.log("messages", messages);
  };

  useEffect(() => {
    if (location.state) {
      messages.push({
        text: location.state,
        sender: "You", // Alternate between two persons
      });

      getAiResponse();
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "95vh",
        padding: 2,
      }}
    >
      <Paper
        sx={{
          flex: 1,
          overflowY: "auto",
          padding: 2,
          marginBottom: 2,
          backgroundColor: "#f5f5f5",
        }}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: msg.sender === "You" ? "flex-start" : "flex-end",
              marginBottom: 1,
            }}
          >
            <Box
              sx={{
                backgroundColor: msg.sender === "You" ? "#e0f7fa" : "#c8e6c9",
                borderRadius: 2,
                padding: 1,
                maxWidth: "70%",
              }}
            >
              <Typography variant="body2" color="textSecondary">
                {msg.sender}
              </Typography>
              <Typography variant="body1">{msg.text}</Typography>
            </Box>
          </Box>
        ))}
      </Paper>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your prompt..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <IconButton
          color="primary"
          sx={{ marginLeft: 1 }}
          onClick={handleSendMessage}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Home;
