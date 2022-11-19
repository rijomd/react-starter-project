import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const CustomerList = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

            <Card variant="outlined" sx={{ mb: 2 }}>
                <React.Fragment>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            CUSTOMER LIST
                        </Typography>
                    </CardContent>
                </React.Fragment>
            </Card>

            <Grid container spacing={3}>
            </Grid>

        </Container>
    )
}

