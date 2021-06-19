import React from 'react';
import Box from './Box/Box';
import Grid from './Grid/Grid';
import GridRuler from './GridRuler/GridRuler';

function App() {
  return (
    <div className="App" style={{margin: "16px", position: "relative", height:"100vh"}}>
      <GridRuler spacing="md"></GridRuler>
      <Grid container spacing="sm" justifyContent="center" alignItem="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 1</Box>
        </Grid>
         <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 2</Box>
        </Grid>
         <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 3</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 3</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
