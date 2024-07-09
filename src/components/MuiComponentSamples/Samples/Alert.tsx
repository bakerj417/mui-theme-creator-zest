import { Alert, AlertTitle, Grid, Typography } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import React from "react"

const sectionProps = {
  item: true,
  xs: 12,
  lg: 6,
  xl: 4,
  gap: 2,
  sx: { display: "flex", flexDirection: "column" },
}

const AlertExample = () => (
  <Grid container columns={1} rowGap="16px">
    <Grid {...sectionProps}>
      <Typography variant="h6" id="buttons-with-icons">
        Outlined Alerts
      </Typography>
      <Alert severity="error" variant="outlined" onClose={() => {}} icon={<WarningIcon fontSize="inherit" sx={{ color: 'rgba(188, 50, 0, 1)' }} />}>
        <AlertTitle><strong>Error</strong></AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="warning" variant="outlined" onClose={() => {}} icon={<ErrorIcon fontSize="inherit" sx={{ color: 'rgba(177, 104, 24, 1)' }} />}>
        <AlertTitle><strong>Warning</strong></AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="info" variant="outlined" onClose={() => {}} icon={<InfoIcon fontSize="inherit" sx={{ color: 'rgba(0, 124, 170, 1)' }} />}>
        <AlertTitle><strong>Info</strong></AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="success" variant="outlined" onClose={() => {}} icon={<CheckCircleIcon fontSize="inherit" sx={{ color: 'rgba(37, 118, 0, 1)' }} />}>
        <AlertTitle><strong>Success</strong></AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    </Grid>
  </Grid>
)

export default AlertExample
