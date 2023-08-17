import { formatCurrency } from '@common/utils';
import { HeartIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import { Card } from '@material-tailwind/react';
import { Navigate } from 'react-router-dom';
const Product = ({ name, image, price, like }) => {
  return (
    <Card
      className="flex flex-col rounded-lg transition ease-in-out hover:scale-105 hover:shadow-lg"
      onClick={() => Navigate(to)}
    >
      <img src={image} className="h-full w-full rounded-md object-cover " />
      <div className="p-2">
        <span>{name}</span>
        <p className="font-semibold">
          <span className="text-pm-main">{formatCurrency(price)}</span> 원
        </p>
        <div className="flex">
          <HeartIcon className="h-4 w-4 " />
          <span className="ml-1 text-sm">{like}</span>
        </div>
      </div>
    </Card>
  );
};

const SalePage = () => {
  return (
    <div className="flex flex-col space-y-10 p-4">
      <div className="flex">
        <BuildingStorefrontIcon className="mx-2 h-10 w-10" />
        <h1 className="text-4xl font-extrabold">중고거래</h1>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Product
          name="리드줄"
          image="https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2474&q=80"
          price="1000"
          like="4"
        />
        <Product
          name="리드줄"
          image="https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1657&q=80"
          price="1000"
          like="4"
        />
        <Product
          name="리드줄"
          image="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
          price="1000"
          like="4"
        />
        <Product
          name="리드줄"
          image="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
          price="1000"
          like="4"
        />
        <Product
          name="리드줄"
          image="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
          price="1000"
          like="4"
        />
        <Product
          name="리드줄"
          image="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
          price="1000"
          like="4"
        />
        <Product
          name="리드줄"
          image="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
          price="1000"
          like="4"
        />
        <Product
          name="리드줄"
          image="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
          price="1000"
          like="4"
        />
        <Product
          name="리드줄"
          image="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
          price="1000"
          like="4"
        />
      </div>
    </div>
  );
};

export default SalePage;
