import "~/styles/reset.css";
import "~/styles/fonts.css";
import type { AppProps } from "next/app";
import styled from "styled-components";
import { GlobalStyle } from "~/styles/style";
import Header from "src/common/header";
import Modal from "~/common/modal";
import { useEffect, useMemo, useState } from "react";
import CombineProviders from "~/provider/combine-providers";
import RecoilProvider from "~/provider/recoil-provider";

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const Provider = useMemo(() => CombineProviders([[RecoilProvider]]), []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <Provider>
          <GlobalStyle />
          <IndexWrapper>
            <Header />
            <Main>
              <Component {...pageProps} />
            </Main>
          </IndexWrapper>
          <Modal />
        </Provider>
      )}
    </>
  );
};

export default MyApp;

const IndexWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100dvh;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 1200px;
  min-height: 100%;
`;
