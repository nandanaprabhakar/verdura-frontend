import React from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  Typography,
  Box
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function ProfileDialog({ open, onClose, image, name, email }) {

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogContent>
        <Box
          sx={{ 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            py: 2, backgroundColor: 'red'
          }}
        >

          <Avatar
            src={image}
            sx={{
              width: 150,
              height: 150,
              mb: 2
            }}
          />

          <Typography variant="h6">
            {name}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3 }}
          >
            {email}
          </Typography>

          <Button
            variant="contained"
            startIcon={<EditIcon />}
          >
            Edit Profile
          </Button>

        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default ProfileDialog;