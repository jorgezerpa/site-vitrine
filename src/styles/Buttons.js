import { Button } from "@mui/material";
import {styled} from "@mui/material/styles";

const basicButton = styled(Button)(() => ({
}));

export const MyButton = styled(basicButton)(() => ({
    '@media (max-width:600px)': {
        fontSize: '.8rem',
    },

}));

export default MyButton;