import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({info}) {

  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
 
  return (
    <div style={{textAlign: "start", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h2>Weather Info</h2>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={INIT_URL} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
           {/* <p>Temprature = {info.temp}&deg;C</p>
           <p>Humaditiy = {info.humaditity}&deg;C</p>
           <p>Min_temp = {info.temM}&deg;C</p>
           <p>Max_temp = {info.temMax}&deg;C</p>
           <p>The weather can be described as <b><i>{info.weather}</i></b> and feels like {info.feels_like}&deg;C</p> */}

           <p>Humaditiy = {info.humaditiy}&deg;C</p>
           <p>Tempresure = {info.temp}&deg;C</p>
           <p>pressure = {info.pressure}&deg;C</p>
           <p>tempMax = {info.temp_max}&deg;C</p>
           <p>tempMin = {info.temp_min}&deg;C</p>
           <p>The weather can be described as <b><i>{info.weather}</i></b> and feels like {info.feels_like}&deg;C</p>

          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
