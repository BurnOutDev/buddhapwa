import React from 'react'
import { Grommet, Box, Button, Heading, Collapsible, ResponsiveContext, Layer, Main, Text } from 'grommet'
import { SettingsOption, Favorite, FormClose, Close, Send, User, Refresh, ShareOption } from 'grommet-icons'
import AppBar from './AppBar'
import { quotes } from './quotes.json'
import Storage from './Storage'

function App() {
  const [showSettings, setShowSettings] = React.useState(false)
  const [showFavorites, setShowFavorites] = React.useState(false)
  const [quoteIndex, setQuoteIndex] = React.useState(Storage.getQuoteIndex())

  const moveNext = () => {
    let start = 0
    let end = quotes.length - 1
    
    let index = Math.floor(Math.random() * end) + start

    index = Storage.getNextIfSeen(index)

    setQuoteIndex(index)
  }

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

                <Main flex align='center' justify='between' pad="large">
                  <Box>
                    {console.log(quotes[quoteIndex])}
                    <Text size="28pt">{quotes[quoteIndex]}</Text>
                  </Box>
                  <Box>
                    <Box direction="row" justify="start">
                      <Button plain={false} icon={<Refresh />} onClick={() => moveNext()} primary margin="small" />
                      <Button plain={false} icon={<Favorite />} onClick={() => { }} primary margin="small" />
                      <Button plain={false} icon={<ShareOption />} onClick={() => { }} primary margin="small" />
                    </Box>
                  </Box>
                </Main>

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
