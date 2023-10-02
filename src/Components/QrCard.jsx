import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import qr from '../images/image-qr-code.png';
export default function QrCard() {
  return (
    <div>
      <Card sx={{ maxWidth: 360 ,margin:"50px auto" }}>
      <CardMedia
        sx={{ height: "360px",width:"90%",borderRadius:"20px",margin:"10px auto" }}
        image={qr}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" sx={{color:"#192c4a",fontWeight:700}} component="div">
          improve your front-end skills by building projects
        </Typography>
        <Typography variant="body2" color="#959ba1">
        Scan the QR code to visit
         Frontend Mentor and take your coding skills to the next level
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}
