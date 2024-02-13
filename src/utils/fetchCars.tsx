import { CarType } from "../types";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b3a8459b6dmsh64bb6d176f81af1p174ce5jsnf58fa4be6dcf',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

type FilterType={
make?:string;
model?:string;
limit?:string;
fuel_type?:string;
year?:string;
}
 export async function fetchCars(
  filters: FilterType
  ):Promise<CarType[]> {
    //varsayılan değer ataması yapılır; objenin bu değerleri tanımsızda gelebilir boş istek olmaması için
  const {make= "bmw", model="m3", limit="5", fuel_type=" ", year= " "}=filters
    const res= await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&modelFamily=${model}&limit=${limit}&fuel_type=${fuel_type}&year=${year}`,
    options
   );
   const data = await res.json();

 return data;
 }