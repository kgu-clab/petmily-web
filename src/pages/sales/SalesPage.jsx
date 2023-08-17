import { useState } from 'react';
import CategoryButton from '@components/ui/CategoryButton';
import layersIcon from '@assets/layers.webp';
import dogIcon from '@assets/dog.webp';
import catIon from '@assets/cat.webp';
import birdIcon from '@assets/bird.webp';
import fishIcon from '@assets/fish.webp';
import chipmunkIcon from '@assets/chipmunk.webp';
import iguanaIcon from '@assets/iguana.webp';
import { Breadcrumbs } from '@material-tailwind/react';
import { Link, useParams } from 'react-router-dom';
import AnimalCard from '@components/ui/AnimalCard';
import Searchbar from '@components/ui/Searchbar';
import { useQuery } from 'react-query';
import { getAdoptionBoards } from '@common/api';
import LoadingPage from '@pages/LoadingPage';
import { formatUserType } from '../../common/utils';

const animals = [
  { name: '전체', icon: layersIcon },
  { name: '강아지', icon: dogIcon },
  { name: '고양이', icon: catIon },
  { name: '새', icon: birdIcon },
  { name: '물고기', icon: fishIcon },
  { name: '소형 동물', icon: chipmunkIcon },
  { name: '파충류', icon: iguanaIcon },
];

const SalesPage = () => {
  const { type } = useParams();

  const [selected, setSelected] = useState('전체');

  const { data, isSuccess, isLoading } = useQuery('animalList', () =>
    getAdoptionBoards(type.toUpperCase()),
  );

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isSuccess) {
    return (
      <div>
        <div className="flex justify-between gap-6">
          <Breadcrumbs
            fullWidth
            className="h-10 whitespace-nowrap rounded-lg bg-gray-300"
          >
            <Link to="/">분양</Link>
            <p className="font-semibold">{formatUserType(type)}</p>
          </Breadcrumbs>

          <div className="flex gap-6">
            {animals.map((item) => (
              <CategoryButton
                key={item.name}
                icon={item.icon}
                label={item.name}
                checked={selected === item.name}
                onClick={() => setSelected(item.name)}
              />
            ))}
          </div>

          <div className="flex transition-all delay-150 hover:grow">
            <Searchbar />
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-extrabold">{selected}</h1>

            <div className="flex gap-2 whitespace-nowrap text-sm">
              <button className="hover:font-semibold">최신순</button>
              <p>|</p>
              <button className="hover:font-semibold">추천순</button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-4">
            {data?.map((animal) => (
              <AnimalCard
                key={animal.id}
                src={JSON.parse(animal.imgUrl)[0]}
                title={animal.species}
                provider={animal.writer.nickname}
                icon={dogIcon}
                price={animal.price}
                to={`/animal/${animal.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

SalesPage.propTypes = {};

export default SalesPage;
