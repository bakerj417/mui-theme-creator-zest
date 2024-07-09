import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

const groupStyle = {
  mb: 2,
  '& > *': {
    m: 1
  }
};

export default function ButtonsExample() {
  const theme = useTheme();
  console.log(theme);

  return (
    <div>
      <Typography variant="h6" id="contained-buttons">
        Contained Buttons
      </Typography>
      <Box sx={groupStyle}>
        <Button variant="contained" size="small">Default Small</Button>
        <Button variant="contained">Default</Button>
        <Button variant="contained" size="large">Default Large</Button>
      </Box>

      <Typography variant="h6" id="text-buttons">
        Text Buttons
      </Typography>
      <Box sx={groupStyle}>
        <Button size="small">Default Small</Button>
        <Button>Default</Button>
        <Button size="large">Default Large</Button>
      </Box>

      <Typography variant="h6" id="outlined-buttons">
        Outlined Buttons
      </Typography>
      <Box sx={groupStyle}>
        <Button variant="outlined" size="small">Default Small</Button>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" size="large">Default Large</Button>
      </Box>

      <Typography variant="h6" id="buttons-with-icons">
        Buttons with start icons and label
      </Typography>
      <Box sx={groupStyle}>
        <Button
          variant="contained"
          size="small"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </Box>

      <Typography variant="h6" id="buttons-with-icons">
        Buttons with end icons and label
      </Typography>
      <Box sx={groupStyle}>
        <Button
          variant="contained"
          size="small"
          endIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button
          variant="contained"
          endIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button
          variant="contained"
          size="large"
          endIcon={<SaveIcon />}
        >
          Save
        </Button>
      </Box>

      <Typography variant="h6" id="buttons-with-icons">
        Buttons with icons only
      </Typography>
      <Box sx={groupStyle}>
        <IconButton aria-label="delete" size="small" sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          "&:hover": { backgroundColor: theme.palette.primary.dark }
        }}>
          <DeleteIcon fontSize="inherit" color="inherit" />
        </IconButton>
        <IconButton aria-label="delete" sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          "&:hover": { backgroundColor: theme.palette.primary.dark }
        }}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="large" sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          "&:hover": { backgroundColor: theme.palette.primary.dark },
        }}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </div>
  );
}
