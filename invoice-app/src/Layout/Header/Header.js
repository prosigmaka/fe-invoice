import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import DashboardPage from "./../Dashboard/DashboardPage";
import InvoicePage from "./../Invoice/InvoicePage";
const drawerWidth = "auto";

export default function ClippedDrawer() {
  const theme = createTheme({
    Typography: {
      fontFamily: [
        'Montserrat', 'cursive'
        ].join(',')
    }
  });

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: '#1B3D81' }}>
        <Toolbar>
          <Link to="/" style={{ color:'inherit', textDecoration: 'none', display: 'block' }}>
            <Typography variant="h6" noWrap component="div" fontFamily='Montserrat' fontWeight="800">
                Invoice App
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>

            <Link to="/dashboard"
              style={{ color:'inherit', textDecoration: 'none', display: 'block' }}
            >
            <ListItem button key= {<DashboardPage />}>
                <ListItemIcon> <GridViewRoundedIcon /> </ListItemIcon>
                <ListItemText> 
                    <Typography fontFamily='Montserrat' fontWeight="600" fontSize='16px'>
                        Dashboard 
                    </Typography>
                </ListItemText>
            </ListItem>
            </Link>

            <Link to="/invoice"
              style={{ color:'inherit', textDecoration: 'none', display: 'block' }}
            >
            <ListItem button key= {<InvoicePage />}>
                <ListItemIcon> <DescriptionRoundedIcon /> </ListItemIcon>
                <ListItemText> 
                <Typography fontFamily='Montserrat' fontWeight="600" fontSize='16px'>
                        Invoice 
                    </Typography>
                </ListItemText>
            </ListItem>
            </Link>
            
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
