
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 4, md: 4 }}>
          <Item><div className="image-container ">
  <img
    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
    alt="Image 4"
    className="w-full h-50 object-cover rounded-xl"
  />
</div></Item>
        </Grid>
        <Grid size={{ xs: 4, md: 4 }}>
          <Item><div className="image-container ">
  <img
    src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww"
    alt="Image 3"
    className="w-full h-50 object-cover rounded-xl"
  />
</div></Item>
        </Grid>
        {/* <Grid size={{ xs: 4, md: 4 }}>
          <Item><div className="image-container">
  <img
    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww"
    alt="Image 2"
    className="w-full h-50 object-cover rounded-xl"
  />
</div></Item>
        </Grid> */}
        <Grid size={{ xs: 4, md: 4 }}>
          <Item><div className="image-container">
  <img
    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww"
    alt="Image 1"
    className="w-full h-50 object-cover rounded-xl"
  />
</div></Item>
        </Grid>
      </Grid>
    </Box>
    
  );
}
