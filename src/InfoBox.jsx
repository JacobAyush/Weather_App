import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';  
import LightModeIcon from '@mui/icons-material/LightMode';

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMeCtJqKEavb9gLIgC_mVaYb6Ur2W0J4Kiw&usqp=CAU";

  const HOT_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIMwWQXph1So6veSbj26DV4m9ucwLDovjEpQ&usqp=CAU";

  const COLD_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_F7xylFQbkt056GRbgvhFmccjR82DFbzCg&usqp=CAU";

  const RAIN_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR55VdarO8tZ9goHIrFWZRHivHxCBo5D1VzEg&usqp=CAU";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
              info.humidity > 80
                ? <ThunderstormIcon />
                : info.temp > 15
                ? <LightModeIcon />
                : <AcUnitIcon />
            }
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C </p>
              <p>Humidity = {info.humidity} </p>
              <p>Minimum Temperature = {info.tempMin}&deg;C </p>
              <p>Maximum Temperature = {info.tempMax}&deg;C </p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like = {info.feelsLike}{" "}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
