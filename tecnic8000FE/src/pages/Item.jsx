// import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { Suspense } from 'react'



// 3D preview with ThreeJS



const Item = ({size, category, brand, PriceRange}) => {
  return (
    <div>Item
        {console.log(size, category, brand, PriceRange)}
    </div>
  )
}

export default Item