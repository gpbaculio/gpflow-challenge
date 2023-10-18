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
import ResponsiveAppBar from "./components/Header";

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <ResponsiveAppBar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Container maxWidth="sm">
          <Box width="100%" component={Paper} elevation={3} p={3}>
            <Stepper alternativeLabel activeStep={currentStep}>
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
            <Box mt={3}>{currentStep === 0 ? <IncomeRangeForm /> : null}</Box>
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {currentStep ? (
                <Box
                  component={Button}
                  mt={3}
                  variant="contained"
                  color="primary"
                >
                  Previous
                </Box>
              ) : null}
              <Box
                ml="auto"
                component={Button}
                mt={3}
                variant="contained"
                color="primary"
              >
                Next
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
