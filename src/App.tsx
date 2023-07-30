import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Route'

import { PomodoroCycleProvider } from './contexts/PomodoroCycleContext'
import { TaskProvider } from './contexts/TaskContext'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <PomodoroCycleProvider>
          <TaskProvider>
            <Router />
          </TaskProvider>
        </PomodoroCycleProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
