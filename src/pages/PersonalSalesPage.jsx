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
import { Link } from 'react-router-dom';
import AnimalCard from '@components/ui/AnimalCard';
import Searchbar from '@components/ui/Searchbar';

const animals = [
  { name: '전체', icon: layersIcon },
  { name: '강아지', icon: dogIcon },
  { name: '고양이', icon: catIon },
  { name: '새', icon: birdIcon },
  { name: '물고기', icon: fishIcon },
  { name: '소형 동물', icon: chipmunkIcon },
  { name: '파충류', icon: iguanaIcon },
];

const PersonalSalesPage = () => {
  const [selected, setSelected] = useState('전체');

  return (
    <div>
      <div className="flex flex-col justify-between gap-6">
        <Breadcrumbs
          fullWidth
          className="h-10 whitespace-nowrap rounded-lg bg-gray-300"
        >
          <Link to="/">분양</Link>
          <p className="font-semibold">개인무료</p>
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
          <AnimalCard
            title="시고르자브종"
            provider="한관희전문분양"
            icon={dogIcon}
            price={100000}
            to="/animal/1"
          />
        </div>
      </div>
    </div>
  );
};

PersonalSalesPage.propTypes = {};

export default PersonalSalesPage;
