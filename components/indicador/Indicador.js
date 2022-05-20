import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import NextLink from 'next/link';
import { numberWithCommas } from 'helpers/FormatNumbers';

const Indicador = (props) => {
    const indicador = props.value;
    const updatedAt = indicador.updatedAt.split('T')[0];
    return (
        <Card variant='outlined'>
            <CardActionArea sx={{ padding: 2 }}>
                <NextLink href={`/indicadores/${indicador.id}`} >
                    <Grid container justifyContent='center' rowSpacing={2} columnSpacing={2}>
                        <Grid item sm container direction='column' sx={{ order: 1 }}>
                            <Grid item>
                                <Typography
                                    variant='h6'
                                    component='h3'
                                    fontWeight='bold'
                                    textAlign='center'
                                    sx={
                                        theme => ({
                                            [theme.breakpoints.up('md')]: {
                                                textAlign: 'left'
                                            }
                                        })
                                    }
                                >
                                    {indicador.nombre}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs
                                container
                                direction='row'
                                justifyContent='space-evenly'
                                rowSpacing={2}
                            >
                                <Grid
                                    item
                                    xs={4}
                                    md={2}
                                    textAlign='center'
                                    container
                                    display='flex'
                                    flexDirection='column'
                                    justifyContent='space-between'
                                >
                                    <Typography
                                        color='detail.main'
                                        fontWeight='bold'
                                        fontSize={25}
                                    >{numberWithCommas(indicador.ultimoValorDisponible)}
                                    </Typography>
                                    <Typography>
                                        Último Valor Disponible
                                    </Typography>
                                </Grid>
                                <Divider
                                    orientation='vertical'
                                    variant='middle'
                                    flexItem
                                    sx={{ borderRightWidth: 3 }}
                                />
                                <Grid
                                    item
                                    xs={4}
                                    md={2}
                                    container
                                    textAlign='center'
                                    display='flex'
                                    flexDirection='column'
                                    justifyContent='space-between'
                                >
                                    <Typography
                                        fontWeight='bold'
                                    >
                                        {indicador.unidad}
                                    </Typography>
                                    <Typography>
                                        Unidad de Medida
                                    </Typography>
                                </Grid>
                                <Divider
                                    orientation='vertical'
                                    variant='middle'
                                    flexItem
                                    sx={{
                                        borderRightWidth: 3,
                                        display: { xs: 'none', md: 'block' }
                                    }}
                                />
                                <Grid
                                    item
                                    xs={4}
                                    md={2}
                                    container
                                    textAlign='center'
                                    display='flex'
                                    flexDirection='column'
                                    justifyContent='space-between'
                                >
                                    <Typography
                                        fontWeight='bold'
                                    >
                                        {updatedAt}
                                    </Typography>
                                    <Typography>
                                        Fecha de Referencia
                                    </Typography>
                                </Grid>
                                <Divider
                                    orientation='vertical'
                                    variant='middle'
                                    flexItem
                                    sx={{ borderRightWidth: 3 }}
                                />
                                <Grid
                                    item
                                    xs={4}
                                    md={2}
                                    container
                                    textAlign='center'
                                    display='flex'
                                    flexDirection='column'
                                    justifyContent='space-between'
                                >
                                    <Typography
                                        fontWeight='bold'
                                    >
                                        {indicador.Cobertura}
                                    </Typography>
                                    <Typography>
                                        Cobertura Geográfica
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Box
                                sx={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 3,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'aliceBlue',
                                }}
                            >
                                logo
                            </Box>
                        </Grid>
                    </Grid>
                </NextLink>
            </CardActionArea>
        </Card>
    );
};

export default Indicador;