import  { Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from 'react-router-dom';

const ButtonCreate = () => {

    return(
        <>
        <Box sx={{display: 'flex', justifyContent: 'flex-end',}}>
            {/*route to create Invoice from Button Create*/}
            <Link to={"/dashboard/create-invoice"} style={{ color:'inherit', textDecoration: 'none', display: 'block' }}>
            <Button 
                variant="contained" 
                component="span"
                size="small"
                startIcon={<AddIcon />}
                sx={{
                    fontSize: 12,
                    marginBottom: 2,
                    borderRadius: 4,
                }}
            >
            Create
            </Button>
            </Link>
        </Box>
        </>
    );
}
export default ButtonCreate;
