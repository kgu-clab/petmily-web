import Chart from '@components/Chart';
import {
  ChartPieIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
  HandThumbUpIcon,
  QueueListIcon,
  ScaleIcon,
  SwatchIcon,
  TagIcon,
} from '@heroicons/react/24/outline';
import { Button, Carousel } from '@material-tailwind/react';
import { useParams } from 'react-router-dom';
import { formatCurrency, formatPhone } from '@common/utils';
import {
  BirthdayCake,
  BookmarkBook,
  ColorFilter,
  ColorPicker,
  Heart,
  Hospital,
  Megaphone,
} from 'iconoir-react';
import genderIcon from '@assets/gender.svg';
import kakaoIcon from '@assets/kakao.svg';

import Swal from 'sweetalert2';
import { Alert } from '@common/alert';
import AnimalProfileTag from '@components/animal/AnimalProfileTag';
import { useQuery } from 'react-query';
import { getAdoptionBoardsInfo } from '@common/api';
import { SERVER_IMG } from '@common/environment';
import server from '@common/server';

const AnimalPage = () => {
  const { id } = useParams();

  const { data, isSuccess } = useQuery('animalInfo', () =>
    getAdoptionBoardsInfo(id),
  );

  const onClickRequest = () => {
    Alert({
      title: '분양 요청',
      text: '해당 반려동물에게 분양 요청을 하시겠습니까?',
      icon: 'warning',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await server.post('/adoption-requests', {
          animalAdoptionBoardId: id,
        });

        if (res.data.success) {
          Swal.fire(
            '분양 요청',
            '해당 반려동물에게 분양 요청을 했습니다.',
            'success',
          );
        }
      }
    });
  };

  const onClickReport = () => {
    Alert({
      title: '신고',
      input: 'select',
      inputOptions: {
        1: '스팸홍보/도배글입니다.',
        3: '불법정보를 포함하고 있습니다.',
        5: '욕설/생명경시/혐호/차별적 표현입니다.',
        6: '개인정보 노출 게시물입니다.',
        7: '불쾌한 표현이 있습니다.',
      },
      inputPlaceholder: '사유선택',
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === '') {
            resolve('사유를 선택해주세요.');
          } else {
            resolve();
          }
        });
      },
    });
  };

  if (isSuccess)
    return (
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 flex gap-4">
          <Carousel className="h-96 basis-8/12 rounded-lg" autoplay>
            {JSON.parse(data.imgUrl).map((image, index) => (
              <img
                key={index}
                src={SERVER_IMG(image)}
                alt={`image-${index}`}
                className="h-full w-full object-cover"
              />
            ))}
          </Carousel>

          <div className="flex grow flex-col gap-4">
            <div className="w-full grow rounded-lg bg-white p-4">
              <div className="flex justify-between">
                <h1 className="flex gap-1 text-xl font-bold">
                  {data.writer.nickname}
                  <CheckBadgeIcon className="h-4 w-4" />
                </h1>
                <p className="text-xs font-medium text-gray-500">
                  관리번호: {id}
                </p>
              </div>

              <ul className="mt-4">
                <li>분류: 업체</li>
                <li>
                  동물판매업번호:
                  {data.writer.businessNumber}
                </li>
                <li>
                  연락처:
                  {formatPhone(data.writer.contact)}
                </li>
                <li>
                  위치:
                  {data.writer.address}
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-4">
              <ul>
                <li>분양가능지역: {data.areasAvailable}</li>
                <li>희망분양가: {formatCurrency(data.price)}원</li>
              </ul>
            </div>

            <div className="flex h-10 gap-4">
              <Button
                color="amber"
                className="flex grow items-center justify-center gap-1 whitespace-nowrap"
              >
                <img src={kakaoIcon} alt="kakao" className="h-4 w-4" />
                카카오 문의
              </Button>
              <Button
                color="blue"
                className="flex items-center justify-center gap-1 whitespace-nowrap"
                onClick={onClickRequest}
              >
                <BookmarkBook className="h-4 w-4" />
                분양 요청
              </Button>
              <Button
                color="red"
                className="flex items-center justify-center gap-1 whitespace-nowrap"
                onClick={onClickReport}
              >
                <Megaphone className="h-4 w-4" />
                신고
              </Button>
            </div>
          </div>
        </div>

        <div className="h-full rounded-lg bg-white p-4">
          <h1 className="font-xl flex gap-2 font-bold">
            <QueueListIcon className="h-5 w-5" />
            프로필
          </h1>

          <div className="mt-4 grid grid-cols-5 place-items-center gap-4">
            <AnimalProfileTag
              icon={<SwatchIcon className="h-5 w-5" />}
              label="품종"
              data={data.species}
            />
            <AnimalProfileTag
              icon={<TagIcon className="h-5 w-5" />}
              label="이름"
              data={data.name}
            />
            <AnimalProfileTag
              icon={<ColorFilter className="h-5 w-5" />}
              label="색상"
              data={data.color}
            />
            <AnimalProfileTag
              icon={<img src={genderIcon} alt="icon" className="h-5 w-5" />}
              label="성별"
              data={data.gender}
            />
            <AnimalProfileTag
              icon={<BirthdayCake className="h-5 w-5" />}
              label="생일"
              data={data.birthDay}
            />
            <AnimalProfileTag
              icon={<BirthdayCake className="h-5 w-5" />}
              label="나이"
              data={data.age}
            />
            <AnimalProfileTag
              icon={<ScaleIcon className="h-5 w-5" />}
              label="몸무게"
              data={data.weight}
            />
            <AnimalProfileTag
              icon={<ColorPicker className="h-5 w-5" />}
              label="필수 접종"
              data={data.vaccine}
            />
            <AnimalProfileTag
              icon={<Hospital className="h-5 w-5" />}
              label="중성화"
              data={data.isNeutered}
            />
            <AnimalProfileTag
              icon={<Heart className="h-5 w-5" />}
              label="최애 간식"
              data={data.favoriteSnack}
            />
          </div>
        </div>

        <div className="h-full rounded-lg bg-white p-4">
          <h1 className="font-xl flex gap-2 font-bold">
            <ChartPieIcon className="h-5 w-5" />
            성격
          </h1>

          <div className="flex justify-center">
            <Chart
              data={[
                data.leadership,
                data.independence,
                data.initiative,
                data.positivity,
                data.adaptability,
              ]}
            />
          </div>
        </div>

        <div className="h-full rounded-lg bg-white p-4">
          <h1 className="font-xl flex gap-2 font-bold text-pm-main">
            <HandThumbUpIcon className="h-5 w-5" />
            이런 분께 추천드려요!
          </h1>

          <ul className="mt-4 list-inside list-disc">
            <li>{data.recommendation}</li>
          </ul>
        </div>

        <div className="h-full rounded-lg bg-white p-4">
          <h1 className="font-xl flex gap-2 font-bold text-pm-red">
            <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
            한번 고민해 보셔야 해요!
          </h1>

          <ul className="mt-4 list-inside list-disc">
            <li>{data.think}</li>
          </ul>
        </div>

        <div className="col-span-2 rounded-lg bg-white p-4">
          <h1 className="font-xl flex gap-2 font-bold">
            <ClipboardDocumentCheckIcon className="h-5 w-5" />
            참고사항
          </h1>

          <div
            className="mt-4 "
            dangerouslySetInnerHTML={{ __html: data.reasonForAdoption }}
          ></div>
        </div>
      </div>
    );
};

AnimalPage.propTypes = {};

export default AnimalPage;
