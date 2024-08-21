import Error from '../../_error'
import Head from "next/head";
import Container from "@mui/material/Container";
import Header from "@components/indicador/Header";
import HistoricalData from "@components/indicador/Historical";
import PageBreadcrumb from "@components/commons/PageBreadcrumb";
import { Stack, Typography } from "@mui/material";
import Owner from '@components/commons/IndicadorOwner';
import Formula from '@components/indicador/Datasheet/Formula';
import Stats from '@components/indicador/Stats';
import { COBERTURA_GEOGRAFICA, UNIDAD_MEDIDA } from '@components/indicador/Indicador';
import { numberWithCommas } from 'helpers/FormatNumbers';


export default function FichaTecnica(props) {

  const { indicador, responsible, navigation } = props;

  const CRUMBS = [{
    text: 'Sistema de Indicadores del PDU2040 Séptima Actualización',
    href: '/chihuahua-en-datos'
  }, {
    text: indicador.Tema.temaIndicador,
    href: '/chihuahua-en-datos/temas/${indicador.Tema.id}/indicadores'
  }, {
    text: indicador.nombre
  }];

  if (props.errorCode) {
    return <Error statusCode={props.errorCode} message={props?.message} />
  }
  const unidad = indicador.catalogos.find(c => c.idCatalogo === UNIDAD_MEDIDA)
  const cobertura = indicador.catalogos.find(c => c.idCatalogo === COBERTURA_GEOGRAFICA)
  return (
    <>
      <Head>
        <title>{indicador.nombre}</title>
        <meta name="description" content={indicador.descripcion} />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Container sx={{ mb: 3, mt: { xs: 0, md: 3 } }}>
        <PageBreadcrumb crumbs={CRUMBS} />
        <Stack spacing={6} mt={2}>
          <Header info={indicador} />
          <Stats
            ultimoValor={`${numberWithCommas(indicador.ultimoValorDisponible)} ${indicador.adornment}`}
            anioReferencia={indicador.anioUltimoValorDisponible}
            tendencia={indicador.tendenciaActual}
            unidad={unidad.nombre}
            cobertura={cobertura.nombre}
          />
          <section>
            <Typography fontStyle='italic' variant='body2'>{indicador.fuente}</Typography>
          </section>

          {/* TODO: ADD ELI5 SECTION */}

          {
            indicador.formula && (
              <IndicadorPageSection title='Fórmula'>
                <Formula formula={indicador?.formula} />
              </IndicadorPageSection>
            )
          }
          {
            indicador.historicos.length > 0 && (
              <IndicadorPageSection title='Históricos'>
                <HistoricalData history={indicador} />
              </IndicadorPageSection>
            )
          }

          <IndicadorPageSection title='Responsable'>

            <Owner
              responsible={responsible.data}
              indicadorDate={indicador.updatedAt}
              indicadorName={indicador.nombre}
            />
          </IndicadorPageSection>
          {/* TODO: ADD RELATED INDICADORES */}
        </Stack>
      </Container>
    </>
  );
}

const IndicadorPageSection = ({ title, children }) => {
  return (<section>
    <Typography variant='h5' mb={2}>{title}</Typography>
    {children}
  </section>)
}


export async function getServerSideProps(context) {
  const idIndicador = context.params.idIndicador;
  const indicadorRes = await fetch(`${process.env.INDICADORES_BASE_URL}/indicadores/${idIndicador}`);
  const errorCode = indicadorRes.ok ? false : indicadorRes.status;
  const indicador = await indicadorRes.json();

  if (errorCode) {
    return { props: { errorCode, ...indicador } }
  }
  const idUser = indicador.data.createdBy || null;
  const responsibleRes = await fetch(`${process.env.INDICADORES_BASE_URL}/usuarios/${idUser}`);
  const responsible = await responsibleRes.json();

  return {
    props: { indicador: { ...indicador.data }, responsible, errorCode, navigation: { ...indicador.navigation } },
  };
}
