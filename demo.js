import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CSSGrid() {
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
        <Box gridColumn="span 1">
          <Item>OK 1</Item>
        </Box>
        <Box gridColumn="span 1">
          <Item>OK 2</Item>
        </Box>
        <Box gridColumn="span 2">
          <Item>xOK 3</Item>
        </Box>
        <Box gridColumn="span 2">
          <Item>OK 4</Item>
        </Box>
        <Box gridColumn="span 1">
          <Item>OK 4</Item>
        </Box>
        <Box gridColumn="span 1">
          <Item>OK 4</Item>
        </Box>
      </Box>
    </Box>
  );
}
