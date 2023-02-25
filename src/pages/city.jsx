import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function City() {
  const { cityName } = useParams();
  const [cityInfo, setCityInfo] = useState();

  useEffect(() => {
    axios.get(`/api/cities/${cityName}`).then((res) => {
      setCityInfo(res.data);
    });
  }, [cityName]);

  useEffect(() => {
    console.log(cityInfo);
  }, [cityInfo]);

  if (cityInfo) {
    return (
      <div>
        <div>名前：{cityInfo.name}</div>
        <div>国：{cityInfo.countryCode}</div>
        <div>県：{cityInfo.district}</div>
        <div>人口：{cityInfo.population}</div>
      </div>
    );
  }
}

export default City;
