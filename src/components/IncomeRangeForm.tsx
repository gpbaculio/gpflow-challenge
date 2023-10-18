import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

function IncomeRangeForm() {
  const [income, setIncome] = useState("");

  const handleChange = (event: any) => {
    setIncome(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <Box
        component={InputLabel}
        bgcolor="white"
        variant="outlined"
        id="income-label"
      >
        Select Income Range
      </Box>
      <Select
        labelId="income-label"
        id="income"
        value={income}
        onChange={handleChange}
      >
        <MenuItem value={"100k"}>100k</MenuItem>
        <MenuItem value={"150k"}>150k</MenuItem>
        <MenuItem value={"250k"}>250k</MenuItem>
      </Select>
    </FormControl>
  );
}

export default IncomeRangeForm;
