import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function City() {
  const { countryCode } = useParams();
  const [cityInfo, setCityInfo] = useState([]);

  useEffect(() => {
    axios.get(`/api/countries/${countryCode}`).then((res) => {
      setCityInfo(res.data);
    });
  }, [countryCode]);

  useEffect(() => {
    console.log(cityInfo);
  }, [cityInfo]);

  return (
    <div>
      <h2>{countryCode}の都市一覧</h2>
      {cityInfo.map((city) => {
        return (
          <Link to={"/city/" + city.name} key={city.name}>
            <div>{city.name}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default City;
