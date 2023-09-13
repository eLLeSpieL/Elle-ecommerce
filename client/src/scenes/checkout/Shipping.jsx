import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AddressForm from "./AddressForm";

const Shipping = ({
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue
}) => {
    return (
        <Box m="30px auto">
            {/* BILLING FORM */}
            <Box>
                <Typography sx={{ mb: "15px" }} fontSize="18px">
                    BILLING INFORMATION
                </Typography>
                <AddressForm />
            </Box>
        </Box>
    )
};

export default Shipping;