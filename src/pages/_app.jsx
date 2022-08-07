import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      // eslint-disable-next-line react/jsx-no-undef
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp
