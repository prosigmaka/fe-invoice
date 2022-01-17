import  { Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


const ButtonCreate = () => {

    return(
        <>
        <Box sx={{display: 'flex', justifyContent: 'flex-end',}}>
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
        </Box>
        </>
    );
}
export default ButtonCreate;