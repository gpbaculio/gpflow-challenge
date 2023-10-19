import {
  Box,
  Container,
  Paper,
  Button,
  TextField,
  Typography,
  Avatar,
  Grid,
  Divider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link as RouterLink } from "react-router-dom";
import { blue } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";

function Signup() {
  const handleFacebookLogin = () => {
    // Here you can handle the Facebook login
    console.log("Facebook login");
  };
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
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Button component={RouterLink} to="/login">
              {"Already have an account? Sign in"}
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
              onClick={handleFacebookLogin}
            >
              Continue with Facebook
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Signup;
