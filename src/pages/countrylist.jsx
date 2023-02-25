import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CountryList() {
  const { countryName } = useParams();
  const [countryInfo, setCountryInfo] = useState([]);

  useEffect(() => {
    axios.get(`/api/countries`).then((res) => {
      setCountryInfo(res.data);
    });
  }, [countryName]);

  useEffect(() => {
    console.log(countryInfo);
  }, [countryInfo]);

  return (
    <div>
      <h2>国の一覧</h2>
      {countryInfo.map((country) => {
        return (
          <Link to={"/country/" + country.code} key={country.name}>
            <div>{country.name}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default CountryList;
