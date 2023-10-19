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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  {...register("fullName")}
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
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
