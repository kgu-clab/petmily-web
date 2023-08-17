import {
  ChartPieIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HandThumbUpIcon,
  QueueListIcon,
  ScaleIcon,
  SwatchIcon,
  TagIcon,
} from '@heroicons/react/24/outline';
import {
  AddMediaImage,
  BirthdayCake,
  ColorFilter,
  ColorPicker,
  Heart,
  Hospital,
} from 'iconoir-react';
import genderIcon from '@assets/gender.svg';
import PropTypes from 'prop-types';
import { Editor } from '@toast-ui/react-editor';
import {
  Button,
  Carousel,
  Option,
  Select,
  Slider,
} from '@material-tailwind/react';
import AnimalSection from '@components/animal/AnimalSection';
import { useMutation, useQuery } from 'react-query';
import { getMyInfo, postAdoptionBoard } from '@common/api';
import { formatPhone, formatUserType } from '@common/utils';
import { useRef, useState } from 'react';
import { SuccessAlert } from '@common/alert';
import { useNavigate } from 'react-router-dom';
import server from '@common/server';
import LoadingPage from '@pages/LoadingPage';

const ProfileSlider = ({ label, value, onChange }) => {
  return (
    <div className="flex items-center gap-2 whitespace-nowrap">
      <p className="w-24">
        {label}: {value * 10}
      </p>
      <Slider defaultValue={0} value={value * 10} onChange={onChange} />
    </div>
  );
};

ProfileSlider.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const ProfileTag = ({ icon, label, name, onChange }) => {
  return (
    <div className="flex w-20 flex-col items-center justify-center rounded-lg bg-gray-100 py-2">
      {icon}

      <div className="text-center">
        <input
          type="text"
          placeholder="필수 입력"
          name={name}
          onChange={onChange}
          className="ml-1 w-[50px] border-b border-gray-400 bg-transparent text-xs outline-none transition delay-150 ease-in-out focus:border-black"
        />

        <p className="mt-1 text-xs text-gray-600">{label}</p>
      </div>
    </div>
  );
};

ProfileTag.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const RegistrationInput = ({ className, placeholder, name, onChange }) => {
  return (
    <input
      type="text"
      name={name}
      onChange={onChange}
      className={`${className} border-b border-gray-400 text-sm outline-none transition delay-150 ease-in-out focus:border-black`}
      placeholder={placeholder}
    />
  );
};

RegistrationInput.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const AnimalRegistrationPage = () => {
  const imgRef = useRef();
  const editorRef = useRef();
  const navigate = useNavigate();

  const { data, isSuccess, isLoading } = useQuery('myInfo', getMyInfo);
  const registrationMutate = useMutation(postAdoptionBoard, {
    onSuccess: (data) => {
      if (data.success) {
        SuccessAlert({
          title: '분양 등록',
          text: '분양 게시글이 생성되었습니다.',
        }).then(() => navigate('/mypage'));
      }
    },
  });

  const [images, setImages] = useState(null);
  const [uploads, setUploads] = useState(null);
  const [inputs, setInputs] = useState({
    animalType: 'DOG',
    species: 'string',
    name: 'string',
    color: 'string',
    gender: 'string',
    age: 0,
    weight: 0,
    vaccine: 'string',
    isNeutered: true,
    birthDay: 'string',
    favoriteSnack: 'string',
    reasonForAdoption: 'string',
    areasAvailable: 'string',
    price: 0,
    leadership: 0,
    independence: 0,
    initiative: 0,
    positivity: 0,
    adaptability: 0,
    recommendation: 'string',
    think: 'string',
  });

  const onClickAdd = async () => {
    const formData = new FormData();
    uploads.forEach((image) => formData.append('files', image));

    const res = await server.post(`/files/animals/${data.nickname}`, formData);

    if (res.data.success) {
      registrationMutate.mutate({
        ...inputs,
        imgUrl: JSON.stringify(res.data.data || []),
      });
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChangeType = (value) => {
    setInputs((prev) => ({
      ...prev,
      animalType: value,
    }));
  };

  const onChangeSlider = (name, value) => {
    setInputs((prev) => ({
      ...prev,
      [name]: Math.floor(value) / 10,
    }));
  };

  const onChangeEditor = () => {
    setInputs((prev) => ({
      ...prev,
      reasonForAdoption: editorRef.current?.getInstance().getHTML(),
    }));
  };

  const onChangeImages = () => {
    const files = imgRef.current.files;
    const allImages = [];
    const allUploads = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.readAsDataURL(files[i]);
      reader.onloadend = () => {
        allImages.push(reader.result);
        allUploads.push(files[i]);

        if (allImages.length === files.length) {
          setImages(allImages);
          setUploads(allUploads);
        }
      };
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isSuccess)
    return (
      <div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 flex gap-4">
            <div className="flex h-96 basis-8/12 items-center justify-center rounded-lg bg-white hover:bg-white/60">
              {images === null ? (
                <div className="flex flex-col items-center gap-2">
                  <AddMediaImage className="h-10 w-10" />

                  <label
                    htmlFor="images"
                    className="cursor-pointer font-medium"
                  >
                    여기를 눌러 반려동물의 사진을 추가할 수 있습니다.
                  </label>

                  <input
                    id="images"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    multiple
                    ref={imgRef}
                    onChange={onChangeImages}
                  />
                </div>
              ) : (
                <Carousel className="h-full w-full rounded-lg" autoplay>
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="image-1"
                      className="h-full w-full object-cover"
                    />
                  ))}
                </Carousel>
              )}
            </div>

            <div className="flex grow flex-col gap-4">
              <div className="w-full grow rounded-lg bg-white p-4">
                <div className="flex justify-between">
                  <h1 className="text-xl font-bold">{data.nickname}</h1>
                </div>

                <ul className="mt-4 leading-loose">
                  <li>분류: {formatUserType(data.type)}</li>
                  <li>
                    동물판매업번호:
                    {data.businessNumber}
                  </li>
                  <li>
                    연락처:
                    {formatPhone(data.contact)}
                  </li>
                  <li>
                    위치:
                    {data.address}
                  </li>
                  <li>
                    카카오 문의:
                    <RegistrationInput
                      className="ml-1"
                      placeholder="문의 채팅방 주소"
                    />
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-4">
                <div className="w-72">
                  <Select
                    name="animalType"
                    onChange={onChangeType}
                    label="분류"
                  >
                    <Option value="DOG">강아지</Option>
                    <Option value="CAT">고양이</Option>
                    <Option value="BIRD">새</Option>
                    <Option value="FISH">물고기</Option>
                    <Option value="SMALL_ANIMAL">소형 동물</Option>
                    <Option value="REPTILE">파충류</Option>
                  </Select>
                </div>

                <ul className="leading-loose">
                  <li>
                    분양가능지역:
                    <RegistrationInput
                      className="ml-1"
                      placeholder="수원, 광교, 동탄"
                      name="areasAvailable"
                      onChange={onChange}
                    />
                  </li>

                  <li>
                    희망분양가:
                    <RegistrationInput
                      className="ml-1"
                      placeholder="100,000"
                      name="price"
                      onChange={onChange}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <AnimalSection
            icon={<QueueListIcon className="h-5 w-5" />}
            title="프로필"
          >
            <div className="mt-4 grid grid-cols-5 place-items-center gap-4">
              <ProfileTag
                icon={<SwatchIcon className="h-5 w-5" />}
                label="품종"
                data="사모예드"
                name="species"
                onChange={onChange}
              />
              <ProfileTag
                icon={<TagIcon className="h-5 w-5" />}
                label="이름"
                data="바둑이"
                name="name"
                onChange={onChange}
              />
              <ProfileTag
                icon={<ColorFilter className="h-5 w-5" />}
                label="색상"
                data="누런색"
                name="color"
                onChange={onChange}
              />
              <ProfileTag
                icon={<img src={genderIcon} alt="icon" className="h-5 w-5" />}
                label="성별"
                data="남"
                name="gender"
                onChange={onChange}
              />
              <ProfileTag
                icon={<BirthdayCake className="h-5 w-5" />}
                label="생일"
                data="3월 23일"
                name="birthDay"
                onChange={onChange}
              />
              <ProfileTag
                icon={<BirthdayCake className="h-5 w-5" />}
                label="나이"
                data="3"
                name="age"
                onChange={onChange}
              />
              <ProfileTag
                icon={<ScaleIcon className="h-5 w-5" />}
                label="몸무게"
                data="20KG"
                name="weight"
                onChange={onChange}
              />
              <ProfileTag
                icon={<ColorPicker className="h-5 w-5" />}
                label="필수 접종"
                data="2차"
                name="vaccine"
                onChange={onChange}
              />
              <ProfileTag
                icon={<Hospital className="h-5 w-5" />}
                label="중성화"
                data="유"
                name="isNeutered"
                onChange={onChange}
              />
              <ProfileTag
                icon={<Heart className="h-5 w-5" />}
                label="최애 간식"
                data="소세지"
                name="favoriteSnack"
                onChange={onChange}
              />
            </div>
          </AnimalSection>

          <AnimalSection
            icon={<ChartPieIcon className="h-5 w-5" />}
            title="성격"
          >
            <ul className="mt-4 leading-loose">
              <li>
                <ProfileSlider
                  label="리더십"
                  value={inputs.leadership}
                  onChange={() =>
                    onChangeSlider('leadership', event.target.value)
                  }
                />
              </li>
              <li>
                <ProfileSlider
                  label="독립성"
                  value={inputs.independence}
                  onChange={() =>
                    onChangeSlider('independence', event.target.value)
                  }
                />
              </li>
              <li>
                <ProfileSlider
                  label="적극성"
                  value={inputs.initiative}
                  onChange={() =>
                    onChangeSlider('initiative', event.target.value)
                  }
                />
              </li>
              <li>
                <ProfileSlider
                  label="긍정성"
                  value={inputs.positivity}
                  onChange={() =>
                    onChangeSlider('positivity', event.target.value)
                  }
                />
              </li>
              <li>
                <ProfileSlider
                  label="적응성"
                  value={inputs.adaptability}
                  onChange={() =>
                    onChangeSlider('adaptability', event.target.value)
                  }
                />
              </li>
            </ul>
          </AnimalSection>

          <AnimalSection
            icon={<HandThumbUpIcon className="h-5 w-5" />}
            title="이런 분께 추천드려요!"
            className="text-pm-main"
          >
            <ul className="mt-4 list-inside list-disc">
              <li>
                <RegistrationInput
                  className="w-60"
                  placeholder="마당이 있는 단독주택이 있으신 분"
                  name="recommendation"
                  onChange={onChange}
                />
              </li>
            </ul>
          </AnimalSection>

          <AnimalSection
            icon={<ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />}
            title="한번 고민해 보셔야 해요!"
            className="text-pm-red"
          >
            <ul className="mt-4 list-inside list-disc">
              <li>
                <RegistrationInput
                  className="w-60"
                  placeholder="야외 활동이 많으신 분"
                  name="think"
                  onChange={onChange}
                />
              </li>
            </ul>
          </AnimalSection>

          <div className="col-span-2 rounded-lg">
            <Editor
              ref={editorRef}
              initialValue=" "
              placeholder="참고사항을 자유롭게 작성해주세요."
              height="400px"
              initialEditType="wysiwyg"
              language="ko"
              hideModeSwitch
              useCommandShortcut={false}
              onChange={onChangeEditor}
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end gap-4">
          <Button color="red">취소</Button>
          <Button color="blue" onClick={onClickAdd}>
            등록
          </Button>
        </div>
      </div>
    );
};

AnimalRegistrationPage.propTypes = {};

export default AnimalRegistrationPage;
