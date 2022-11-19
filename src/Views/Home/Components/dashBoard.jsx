import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Chart from './chart';

const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                www.mycompany.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const DashBoard = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

            <Card variant="outlined" sx={{mb:2 }}>
                <React.Fragment>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            DASHBOARD
                        </Typography>
                    </CardContent>
                </React.Fragment>
            </Card>

            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Chart />
                    </Paper>
                </Grid>
            </Grid>

            <Copyright sx={{ pt: 4 }} />

        </Container>
    )
}

