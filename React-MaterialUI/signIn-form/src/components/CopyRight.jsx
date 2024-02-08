import { Link, Typography } from "@mui/material";

function CopyRight(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Copyright ©
      <Link color="inherit" href="#">
        Website Name
      </Link>
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default CopyRight;
