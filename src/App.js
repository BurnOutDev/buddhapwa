import React from 'react'
import { Grommet, Box, Button, Heading, Collapsible, ResponsiveContext, Layer } from 'grommet'
import { SettingsOption, Favorite, FormClose } from 'grommet-icons'
import AppBar from './AppBar'

function App() {
  const [showSettings, setShowSettings] = React.useState(false)
  const [showFavorites, setShowFavorites] = React.useState(false)

  return (
    <div className="App">
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Button icon={<Favorite />} onClick={() => setShowFavorites(!showFavorites)} />
                <Heading level='3' margin='none'>Buddha Quotes</Heading>
                <Button icon={<SettingsOption />} onClick={() => setShowSettings(!showSettings)} />
              </AppBar>

              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                {(!showFavorites || size !== 'small') ? (
                  <Collapsible direction="horizontal" open={showFavorites}>
                    <Box
                      flex
                      width='medium'
                      background='light-2'
                      elevation='small'
                      align='center'
                      justify='center'
                    >
                      favorites
                    </Box>
                  </Collapsible>
                ) : (
                    <Layer>
                      <Box
                        background='light-2'
                        tag='header'
                        justify='end'
                        align='center'
                        direction='row'
                      >
                        <Button
                          icon={<FormClose />}
                          onClick={() => setShowFavorites(false)}
                        />
                      </Box>
                      <Box
                        fill
                        background='light-2'
                        align='center'
                        justify='center'
                      >
                        favorites
                      </Box>
                    </Layer>
                  )}
                <Box flex align='center' justify='center'>app body</Box>
                {(!showSettings || size !== 'small') ? (
                  <Collapsible direction="horizontal" open={showSettings}>
                    <Box
                      flex
                      width='medium'
                      background='light-2'
                      elevation='small'
                      align='center'
                      justify='center'
                    >
                      settings
                    </Box>
                  </Collapsible>
                ) : (
                    <Layer>
                      <Box
                        background='light-2'
                        tag='header'
                        justify='end'
                        align='center'
                        direction='row'
                      >
                        <Button
                          icon={<FormClose />}
                          onClick={() => setShowSettings(false)}
                        />
                      </Box>
                      <Box
                        fill
                        background='light-2'
                        align='center'
                        justify='center'
                      >
                        settings
                    </Box>
                    </Layer>
                  )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </div >
  );
}

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    colors: {
      brand: '#228BE6',
    },
  },
};

export default App;
