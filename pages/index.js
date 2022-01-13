import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Container from "@mui/material/Container";
import EmblaCarousel from '@components/EmblaCarousel';
export default function Home() {
  return (
    <>
      <EmblaCarousel />
    <div className={styles.container}>
      <Head>
        <title>Observatorio urbano</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>Observatorio Urbano</h1>
        <Link href="/indicador">
          <a>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget maximus diam, at maximus justo. Fusce ac tortor non ante efficitur dignissim. Vivamus vel ipsum enim. Phasellus odio leo, volutpat et risus eu, tincidunt efficitur metus. Mauris interdum augue sit amet massa pharetra sagittis. Aliquam elementum neque vel feugiat iaculis. Nunc aliquet dapibus blandit. Ut vehicula pulvinar vehicula. Sed semper euismod lorem, ac tempus risus facilisis non. Proin ut nisl vitae nulla cursus tempus. Suspendisse fringilla turpis eget arcu faucibus volutpat. Nulla feugiat odio sit amet nisl tempor congue. Aenean nisi nisl, dignissim at sodales dapibus, auctor a massa. Aliquam nibh diam, vestibulum quis erat in, fermentum vehicula nibh. Vivamus finibus fringilla dolor, vitae posuere felis dapibus facilisis.

Nullam ut risus vestibulum, mattis ante quis, malesuada mi. Fusce enim lorem, condimentum quis fringilla ut, scelerisque a ex. Donec ut lacus erat. Nam pretium mauris at neque congue rutrum. Praesent lobortis est sed justo aliquet porta. Aenean maximus condimentum est, dignissim euismod est pulvinar blandit. Nulla velit tellus, consectetur ut elit at, feugiat rhoncus neque. Sed tincidunt massa eu elit convallis, eget gravida nisl rutrum. Donec dignissim ultrices diam, nec egestas diam ultricies vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis dapibus pretium est, sed lobortis erat suscipit eget. Sed vestibulum molestie leo sollicitudin tempor. Praesent sed nisl eget neque hendrerit vehicula. Phasellus iaculis dignissim rutrum. Nunc consectetur ullamcorper enim.

Proin id consequat ante. Nunc a enim non magna sagittis venenatis. Etiam mi velit, rhoncus ac cursus id, semper et massa. Phasellus facilisis orci nec congue venenatis. Morbi ligula erat, vestibulum suscipit massa eget, lobortis sodales leo. Nulla hendrerit mattis sollicitudin. Phasellus et tempor ex. Suspendisse vulputate urna purus, sit amet luctus sapien porttitor vitae.

Donec egestas urna vitae orci auctor sagittis. Suspendisse quis est risus. Donec a pretium libero. Curabitur rutrum, nisl ut mattis aliquet, sapien felis vestibulum sem, eu suscipit turpis urna eget urna. Ut sit amet enim pharetra, sollicitudin mauris id, convallis erat. Nunc vitae diam posuere, pretium dui eget, tempor felis. Nulla viverra at dui ac aliquet. Proin neque augue, laoreet a dictum et, efficitur sit amet urna. Maecenas molestie tellus ac dignissim vestibulum.

Sed aliquet, enim eu tristique cursus, ipsum felis fermentum dolor, id pellentesque lorem ligula imperdiet justo. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer a efficitur tellus, quis scelerisque est. Phasellus facilisis, tortor nec ullamcorper rhoncus, augue ipsum tempor odio, in auctor ipsum magna vel quam. Nullam id bibendum est. Sed iaculis nec neque eget sagittis. Donec nec hendrerit justo. Suspendisse est arcu, cursus vitae lectus id, lobortis sollicitudin felis. Praesent volutpat eget neque in tincidunt. Aenean rhoncus urna dictum diam elementum sollicitudin. Ut in velit vitae ligula vestibulum varius. Phasellus luctus laoreet fringilla.
          </a>
        </Link>
      </Container>
    </div>
    </>
  )
}
