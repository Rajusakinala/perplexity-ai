import {} from "@mui/material";
import { TextField, IconButton, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
const NewTrhead = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage(""); // Clear the input field
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginTop: "25%",
      }}
    >
      <div
        style={{
          width: "1000px",
          height: "100px",
          //   border: "2px solid gray",
          //   borderRadius: "8px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
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
      </div>
    </div>
  );
};

export default NewTrhead;
