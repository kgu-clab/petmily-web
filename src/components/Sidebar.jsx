import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import {
  BookOpenIcon,
  HomeIcon,
  BuildingStorefrontIcon,
  ExclamationTriangleIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Heart, PeopleTag } from 'iconoir-react';
import LogoIcon from '/logo.svg';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const auth = sessionStorage.getItem('access');

  const [open, setOpen] = useState(0);

  const handleOpen = (value, to) => {
    setOpen(open === value ? 0 : value);

    if (to) {
      navigate(to);
    }
  };

  return (
    <div className="fixed flex min-h-screen w-[18rem] flex-col justify-between bg-white p-4">
      <div>
        <div className="mb-2 flex items-center gap-2 px-4">
          <img src={LogoIcon} alt="logo" className="h-5 w-5" />
          <Typography variant="h4" className="font-extrabold">
            팻밀리
          </Typography>
        </div>

        <List className="text-sm">
          <ListItem onClick={() => handleOpen(0, '/')}>
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            홈
          </ListItem>

          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? 'rotate-180' : ''
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <Heart className="h-5 w-5" />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto text-sm font-normal"
                >
                  분양
                </Typography>
              </AccordionHeader>
            </ListItem>

            <AccordionBody className="py-1">
              <List className="p-0 text-sm">
                <ListItem onClick={() => handleOpen(1, '/professional')}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  전문업체
                </ListItem>

                <ListItem onClick={() => handleOpen(0, '/shelter')}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  보호소
                </ListItem>

                <ListItem onClick={() => handleOpen(0, '/personal')}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  개인무료
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 2 ? 'rotate-180' : ''
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <BuildingStorefrontIcon className="h-5 w-5" />
                </ListItemPrefix>

                <Typography
                  color="blue-gray"
                  className="mr-auto text-sm font-normal"
                >
                  스토어
                </Typography>
              </AccordionHeader>
            </ListItem>

            <AccordionBody className="py-1">
              <List className="p-0 text-sm">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  새상품
                </ListItem>

                <ListItem onClick={() => handleOpen(0, '/store/used')}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  중고물품
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          <hr className="my-2 border-blue-gray-50" />

          <ListItem onClick={() => handleOpen(0, '/guide')}>
            <ListItemPrefix>
              <BookOpenIcon className="h-5 w-5" />
            </ListItemPrefix>
            가이드
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <PeopleTag className="h-5 w-5" />
            </ListItemPrefix>
            고객센터
          </ListItem>

          {auth ? (
            <ListItem onClick={() => handleOpen(0, '/mypage')}>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              마이페이지
            </ListItem>
          ) : (
            <ListItem onClick={() => handleOpen(0, '/login')}>
              <ListItemPrefix>
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
              </ListItemPrefix>
              로그인
            </ListItem>
          )}
        </List>
      </div>

      <div className="rounded-lg bg-pm-main p-4 text-white">
        <ExclamationTriangleIcon className="mb-2 h-8 w-8" />
        <Typography variant="h6" className="mb-1">
          분양등록안내
        </Typography>
        <Typography variant="small" className="font-normal opacity-80">
          팻밀리는 누구나 분양등록을 할 수 있습니다. 하지만 가정분양은
          동물보호정책에 따라 분양비용을 받으실 수 없습니다.
        </Typography>
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
