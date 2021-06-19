import React from 'react';
import { Story, Meta } from '@storybook/react';
import Grid from './Grid';
import GridRuler from '../GridRuler/GridRuler';
import Box from '../Box/Box';

export default {
  title: 'Grid',
  component: Grid,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Basic: Story = (args) => (
    <div style={{position: "relative"}}>
      <Grid container spacing="sm" justifyContent="center" alignItem="center" {...args}>
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

export const WithRuler: Story = (args) => (
    <div style={{position: "relative"}}>
      <GridRuler spacing="md"></GridRuler>
      <Grid container spacing="sm" justifyContent="center" alignItem="center" {...args}>
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



