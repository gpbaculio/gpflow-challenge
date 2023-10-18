import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  StepLabel,
  Stepper,
  Step,
  Box,
  Container,
  Paper,
  Button,
} from "@mui/material";
import { useState } from "react";
import IncomeRangeForm from "./components/IncomeRangeForm";

function App() {
  const [income, setIncome] = useState("");

  const handleChange = (event: any) => {
    setIncome(event.target.value);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container maxWidth="sm">
        <Box width="100%" component={Paper} elevation={3} p={3}>
          <Stepper alternativeLabel>
            <Step>
              <StepLabel>Select Income Range</StepLabel>
            </Step>
            <Step>
              <StepLabel>Select Primary Investment Goal</StepLabel>
            </Step>
            <Step>
              <StepLabel>Select Experience Level</StepLabel>
            </Step>
          </Stepper>
          <Box mt={3}>
            <IncomeRangeForm />
          </Box>
          <Box width="100%" display="flex" alignItems="end">
            <Box
              component={Button}
              mt={3}
              ml="auto"
              variant="contained"
              color="primary"
            >
              Next
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
