import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { IconContext } from 'react-icons';
import 'normalize.css/normalize.css';

import 'typeface-source-sans-pro';
import '../styles/global.css';
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <Component {...pageProps} />
      </IconContext.Provider>
      k
    </ThemeProvider>
  );
};

export default App;
