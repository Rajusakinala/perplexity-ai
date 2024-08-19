import { useState } from "react";
import { TextField, IconButton, Box, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Home = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const newMessage = {
        text: message,
        sender: messages.length % 2 === 0 ? "Person 1" : "Person 2", // Alternate between two persons
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

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
              justifyContent:
                msg.sender === "Person 1" ? "flex-start" : "flex-end",
              marginBottom: 1,
            }}
          >
            <Box
              sx={{
                backgroundColor:
                  msg.sender === "Person 1" ? "#e0f7fa" : "#c8e6c9",
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
