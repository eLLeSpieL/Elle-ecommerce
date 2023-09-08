import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme"
import { useState } from "react";

const Footer = () => {
    const { 
        palette: { neutral },
    } = useTheme();

    return(
        <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box width="clamp(20px, 30px, 40px)">
                    <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}>ECOMMER</Typography>
                    <div>
                        Auch beim Anreiten erweist er sich als überaus gelehrig und kooperativ - es ist immer eine Freude mit ihm zu arbeiten und zu sehen wie viel Spaß ihm selbst die Arbeit und der Umgang mit Menschen bereiten!
                    </div>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        About Us
                    </Typography>
                    <Typography mb="30px">Careers</Typography>
                    <Typography mb="30px">Our Story</Typography>
                    <Typography mb="30px">Terms & Conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                       Customer Care
                    </Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track your Order</Typography>
                    <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
                    <Typography mb="30px">Returns and Refunds</Typography>
                </Box>

                <Box width="clamp(20%, 25%, 30%)">
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                       Contact Us
                    </Typography>
                    <Typography mb="30px">05 North Somewhere Blvd, Washington, DC 10501</Typography>
                    <Typography mb="30px">Email: someone.somewhere@gmail.com</Typography>
                    <Typography mb="30px">(111) 222-3333</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;