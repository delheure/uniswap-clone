import "~/styles/reset.css";
import "~/styles/fonts.css";
import type { AppProps } from "next/app";
import styled from "styled-components";
import { GlobalStyle } from "~/styles/style";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "~/components/header";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <IndexWrapper>
        <GlobalStyle />
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
      </IndexWrapper>
      )
    </QueryClientProvider>
  );
}

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
  width: 100%;
  padding: 0 28px;
  overflow-y: auto;
  overflow-x: hidden;
`;
