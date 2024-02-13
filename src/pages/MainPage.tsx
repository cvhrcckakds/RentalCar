//verileri çekme işlemleri
import { useEffect, useState } from "react";
import { fetchCars } from "../utils/fetchCars";
import { CarType } from "../types";
import Hero from "../componenets/Hero";
import CustomFilter from "../componenets/CustomFilter";
import SearchBar from "../componenets/SearchBar";
import Card from "../componenets/Card";
import { fuels, years } from "../componenets/constans";
import { useSearchParams } from "react-router-dom";

const MainPage = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
//urldeki arama parametrelerine erişme
const [params]=useSearchParams();

  useEffect(() => {
    //bütün arama parametrelerini objeye çevirir.
    const paramsObj=Object.fromEntries(params.entries())

    fetchCars(paramsObj)
    //istek başarılı olursa:
    .then((data)=> setCars(data))
    //istek başarısız olursa:
    .catch(()=>setIsError(true));

  }, [params]);

  return (
    <div>
      <Hero />

      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter paramName={"fuel_type"} title="Yakıt Tipi" options={fuels} />
            <CustomFilter paramName={"year"} title="Üretim Yılı " options={years}  />
          </div>
        </div>
        {!cars ? (
          <div className="warn-container">
            <h2>Yükleniyor...</h2>
          </div>
        ) : isError ? (
          <div className="warn-container">
            <h2>Üzgünüz, verileri alırken bir hata oluştu</h2>
          </div>
        ) : cars.length < 1 ? (
          <div className="warn-container">
            <h2>Aradığınız kriterlere uygun araba bulunammadı</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i)=> (
                <Card key={i} car={car}/>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
