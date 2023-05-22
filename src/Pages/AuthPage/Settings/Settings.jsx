import React from 'react';
import { Box } from '@mui/material';
// import Typography from '@mui/material/node/Typography';
import Lists from '../../../components/Settings/Lists';
import Header from '../../../components/headerLog/Header'

export default function Settings () {
    return (
        <>
            <div className="bgColor">
                <Box height={70}>
                    <Box sx={{ display: "flex" }}>
                        <Box component="main" sx={{ flexGrow: 1, p: 3}}>
                            <Lists />
                        </Box>
                    </Box>
                </Box>
            </div>
        </>
    )
}