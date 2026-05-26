import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Roadmap } from './pages/Roadmap';
import { LessonPage } from './pages/LessonPage';
import { PromptPlaybook } from './pages/PromptPlaybook';
import { LearningLog } from './pages/LearningLog';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4f46e5', // Indigo 600
      light: '#818cf8',
      dark: '#3730a3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#14b8a6', // Teal 500
      light: '#2dd4bf',
      dark: '#0f766e',
      contrastText: '#ffffff',
    },
    success: {
      main: '#10b981', // Emerald 500
      light: '#34d399',
      dark: '#047857',
    },
    background: {
      default: '#f8fafc', // Slate 50
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a', // Slate 900
      secondary: '#475569', // Slate 600
    },
    divider: '#e2e8f0', // Slate 200
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontFamily: 'Outfit, sans-serif', fontWeight: 800 },
    h2: { fontFamily: 'Outfit, sans-serif', fontWeight: 700 },
    h3: { fontFamily: 'Outfit, sans-serif', fontWeight: 700 },
    h4: { fontFamily: 'Outfit, sans-serif', fontWeight: 700 },
    h5: { fontFamily: 'Outfit, sans-serif', fontWeight: 700 },
    h6: { fontFamily: 'Outfit, sans-serif', fontWeight: 700 },
    subtitle1: { fontSize: '1rem', fontWeight: 500 },
    subtitle2: { fontSize: '0.875rem', fontWeight: 500 },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/lesson/:id" element={<LessonPage />} />
            <Route path="/playbook" element={<PromptPlaybook />} />
            <Route path="/log" element={<LearningLog />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

