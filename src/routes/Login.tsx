import {
  Box,
  Container,
  Paper,
  Button,
  TextField,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link as RouterLink } from "react-router-dom";
import { blue } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";

function Login() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container maxWidth="xs">
        <Box
          width="100%"
          alignItems="center"
          component={Paper}
          elevation={3}
          p={3}
          display="flex"
          flexDirection="column"
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button component={RouterLink} to="/signup">
              {"Don't have an account? Sign Up"}
            </Button>
            <Divider sx={{ my: 2 }}>
              <Typography variant="body1" color="textSecondary">
                OR
              </Typography>
            </Divider>
            <Button
              variant="contained"
              style={{ backgroundColor: blue[500], color: "white" }}
              startIcon={<FacebookIcon />}
              fullWidth
              onClick={() => {}}
            >
              Continue with Facebook
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;
