const baseFonts = [
  'Jockey One',
  'Open Sans',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
];

export default {
  palette: {
    primary: {
      lighter: '#FFCF74',
      light: '#FFC14A',
      main: '#FDB01F',
      dark: '#D48C02',
      darker: '#A76D00',
    },
    secondary: {
      lighter: '#7E6ACC',
      light: '#5E45B9',
      main: '#4428AE',
      dark: '#2D1392',
      darker: '#220C73',
    },
    tertiary: {
      lighter: '#57C0B8',
      light: '#31A89F',
      main: '#139B92',
      dark: '#018279',
      darker: '#00675F',
    },
    obsidian: {
      mainHighlight: '#3a383e',
      main: '#343238',
      dark: '#242128',
    },
    green: {
      lighter: '#57C0B8',
      light: '#31A89F',
      main: '#139B92',
      dark: '#018279',
      darker: '#00675F',
    },
    orange: {
      lighter: '#FFCF74',
      light: '#FFC14A',
      main: '#FDB01F',
      dark: '#D48C02',
      darker: '#A76D00',
    },
    typography: {
      light: '#fefefe',
    },
  },
  typography: {
    base: {
      fontFamily: baseFonts.join(','),
    },
    title: {
      fontFamily: baseFonts.join(','),
    },
  },
  transition: {
    timingFunction: 'cubic-bezier(.48,-0.29,.35,1.2)',
    duration: '500ms',
  },
};
