import {
  ChartPieIcon,
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
} from 'iconoir-react';
import genderIcon from '@assets/gender.svg';
import PropTypes from 'prop-types';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@material-tailwind/react';

const Section = ({ icon, title, className = '', children }) => {
  return (
    <div className="h-full rounded-lg bg-white p-4">
      <h1 className={`${className} font-xl flex gap-2 font-bold`}>
        {icon}
        {title}
      </h1>

      {children}
    </div>
  );
};

Section.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const ProfileTag = ({ icon, label }) => {
  return (
    <div className="flex w-20 flex-col items-center justify-center rounded-lg bg-gray-100 py-2">
      {icon}

      <div className="text-center">
        <input
          type="text"
          placeholder="필수 입력"
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
};

const RegistrationInput = ({ className, placeholder }) => {
  return (
    <input
      type="text"
      className={`${className} border-b border-gray-400 text-sm outline-none transition delay-150 ease-in-out focus:border-black`}
      placeholder={placeholder}
    />
  );
};

RegistrationInput.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

const AnimalRegistrationPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 flex gap-4">
          <div className="flex h-96 basis-8/12 cursor-pointer items-center justify-center rounded-lg bg-white hover:bg-white/60">
            <div className="flex flex-col items-center gap-2">
              <AddMediaImage className="h-10 w-10" />
              <p className="font-medium">
                반려동물 사진을 여기에 추가해주세요.
              </p>
            </div>
          </div>

          <div className="flex grow flex-col gap-4">
            <div className="w-full grow rounded-lg bg-white p-4">
              <div className="flex justify-between">
                <RegistrationInput
                  className="font-bold"
                  placeholder="판매자 명"
                />
              </div>

              <ul className="mt-4 leading-loose">
                <li>분류: 업체</li>
                <li>
                  동물판매업번호:
                  <RegistrationInput className="ml-1" placeholder="123456789" />
                </li>
                <li>
                  연락처:
                  <RegistrationInput
                    className="ml-1"
                    placeholder="010-1234-5678"
                  />
                </li>
                <li>
                  위치:
                  <RegistrationInput
                    className="ml-1"
                    placeholder="수원시 영통구 광교산로"
                  />
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
              <ul className="leading-loose">
                <li>
                  분양가능지역:
                  <RegistrationInput
                    className="ml-1"
                    placeholder="수원, 광교, 동탄"
                  />
                </li>
                <li>
                  책임비:
                  <RegistrationInput className="ml-1" placeholder="50,000" />
                </li>
                <li>
                  희망분양가:
                  <RegistrationInput className="ml-1" placeholder="100,000" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Section icon={<QueueListIcon className="h-5 w-5" />} title="프로필">
          <div className="mt-4 grid grid-cols-5 place-items-center gap-4">
            <ProfileTag
              icon={<SwatchIcon className="h-5 w-5" />}
              label="품종"
              data="사모예드"
            />
            <ProfileTag
              icon={<TagIcon className="h-5 w-5" />}
              label="이름"
              data="바둑이"
            />
            <ProfileTag
              icon={<ColorFilter className="h-5 w-5" />}
              label="색상"
              data="누런색"
            />
            <ProfileTag
              icon={<img src={genderIcon} alt="icon" className="h-5 w-5" />}
              label="성별"
              data="남"
            />
            <ProfileTag
              icon={<BirthdayCake className="h-5 w-5" />}
              label="나이"
              data="3"
            />
            <ProfileTag
              icon={<ScaleIcon className="h-5 w-5" />}
              label="몸무게"
              data="20KG"
            />
            <ProfileTag
              icon={<ColorPicker className="h-5 w-5" />}
              label="필수 접종"
              data="2차"
            />
          </div>
        </Section>

        <Section icon={<ChartPieIcon className="h-5 w-5" />} title="성격">
          <ul className="mt-4 leading-loose">
            <li>
              리더십:
              <RegistrationInput className="ml-1" placeholder="0.0 ~ 10.0" />
            </li>
            <li>
              독립성:
              <RegistrationInput className="ml-1" placeholder="0.0 ~ 10.0" />
            </li>
            <li>
              적극성:
              <RegistrationInput className="ml-1" placeholder="0.0 ~ 10.0" />
            </li>
            <li>
              긍정성:
              <RegistrationInput className="ml-1" placeholder="0.0 ~ 10.0" />
            </li>
            <li>
              적응성:
              <RegistrationInput className="ml-1" placeholder="0.0 ~ 10.0" />
            </li>
          </ul>
        </Section>

        <Section
          icon={<HandThumbUpIcon className="h-5 w-5" />}
          title="이런분께 추천드려요!"
          className="text-pm-main"
        >
          <ul className="mt-4 list-inside list-disc">
            <li>
              <RegistrationInput
                className="w-60"
                placeholder="마당이 있는 단독주택이 있으신 분"
              />
            </li>
          </ul>
        </Section>

        <Section
          icon={<HandThumbUpIcon className="h-5 w-5" />}
          title="한번 고민해보셔야해요!"
          className="text-pm-red"
        >
          <ul className="mt-4 list-inside list-disc">
            <li>
              <RegistrationInput
                className="w-60"
                placeholder="야외 활동이 많으신 분"
              />
            </li>
          </ul>
        </Section>

        <div className="col-span-2 rounded-lg">
          <Editor
            initialValue=" "
            placeholder="참고사항을 자유롭게 작성해주세요."
            height="400px"
            initialEditType="wysiwyg"
            language="ko"
            hideModeSwitch
            useCommandShortcut={false}
          />
        </div>
      </div>

      <div className="mt-4 flex justify-end gap-4">
        <Button color="red">취소</Button>
        <Button color="blue">등록</Button>
      </div>
    </>
  );
};

AnimalRegistrationPage.propTypes = {};

export default AnimalRegistrationPage;
