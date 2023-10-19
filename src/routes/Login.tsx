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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
interface LoginData {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginData) => {
    console.log(data);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container maxWidth="xs">
        <Paper elevation={3}>
          <Box
            p={3}
            alignItems="center"
            justifyContent="center"
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
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                autoFocus
                {...register("email")}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("password")}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
            <Button component={RouterLink} to="/signup">
              {"Don't have an account? Sign Up"}
            </Button>
            <Divider sx={{ my: 2, width: "100%" }}>
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
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;
