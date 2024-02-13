//daha fazla butonu: her tıklandığında 5er 5er artırıyor kartları

import { useSearchParams } from 'react-router-dom';
import  {CustomButton} from '../CustomButton';

const ShowMore = () => {
const [searchParams, setSearchParams]=useSearchParams();
const limit=Number(searchParams.get('limit'))||5;

const handleLimit=()=>{
    //yeni limiti belirle
    const newLimit=String(limit + 5);
    //parametreleri GÜNCELLE Ama eski parametreleri üzerine ekle
    searchParams.set("limit", newLimit)
    setSearchParams(searchParams);
}

//1- urlde limit parametresi yoksa: kullanıcı sayfaya yeni girmiş ve ekranda 5 araç vardır
//2-urlde limit parametresi varsa kullanıcı bir kez ekrana basmıştır
  return (
    <div className='w-full flex-center gap-5 my-10'>
        {limit <30 && (
        <CustomButton handleClick={handleLimit} title='Daha Fazla'/>
  )}
    </div>
  )
}

export default ShowMore;