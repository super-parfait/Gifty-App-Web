import * as React from 'react';
// import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs'; 
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
// import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Profile from './Profile';
import Personal from './Personal';
import Password from './Password';
import Commandes from './Commandes';


  
  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 60,
      width: '100%',
      backgroundColor: 'red',
    },
  });
  
  const StyledTab = styled((props) => (
    <Tab disableRipple {...props} />
  ))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightlight,
    fontSize: theme.typography.pxToRem(13),
    marginRight: theme.spacing(0),
    color: 'black',
    '&.Mui-selected': {
      color: 'red',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'red',
    },
  }));



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Lists() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <> 
    <div className='content'><br /><br/>
    <Card className='mx-auto max-w-5xl'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Stack className='h-12'>
        <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <StyledTab label="Mes Infos" {...a11yProps(0)} />
          <StyledTab label="Modifer Mes Infos" {...a11yProps(1)} />
          <StyledTab label="Modifer Mot de Passe" {...a11yProps(2)} />
          <StyledTab label="Mes Commandes" {...a11yProps(3)} />
        </StyledTabs>
        </Stack>
      </Box>
      <TabPanel value={value} index={0}>
        <Profile />
      </TabPanel>
      <TabPanel value={value} index={1}>
       < Personal />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Password />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Commandes />
      </TabPanel>
    </Box>
    </Card>
    </div>

    </>
  );
}