import { formatCurrency } from '@common/utils';
import { CubeIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline';
import { Breadcrumbs, Carousel } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, name, price, location }) => {
  return (
    <button className="flex flex-col">
      <img
        src={image}
        alt="product image"
        className="h-56 w-56 rounded-lg object-cover"
      />

      <div className="mt-2 flex flex-col gap-1 text-start text-sm">
        <h1 className="text-lg">{name}</h1>
        <p className="font-bold">{formatCurrency(price)} 원</p>
        <p>{location}</p>
      </div>
    </button>
  );
};

const StorePage = () => {
  return (
    <div className="flex flex-col space-y-10 p-4">
      <Breadcrumbs
        fullWidth
        className="h-10 whitespace-nowrap rounded-lg bg-gray-300"
      >
        <Link to="/">스토어</Link>
        <p className="font-semibold">중고거래</p>
      </Breadcrumbs>

      <div>
        <Carousel className="h-[500px] w-full rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>

        <div className="my-4 flex gap-4">
          <button className="flex items-center gap-1 rounded-lg border-2 border-gray-300 bg-gray-300 px-2 py-1 text-xs font-semibold hover:border-pm-main">
            <Square3Stack3DIcon className="h-5 w-5" />
            <p>전체</p>
          </button>

          <button className="flex items-center gap-1 rounded-lg border-2 border-gray-300 bg-gray-300 px-2 py-1 text-xs font-semibold hover:border-pm-main">
            <CubeIcon className="h-5 w-5" />
            <p>장난감</p>
          </button>
        </div>

        <hr />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <ProductCard
          image="https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2474&q=80"
          name="리드줄"
          price="100000"
          location="경기도 안산시 단원구"
        />
      </div>
    </div>
  );
};

export default StorePage;
