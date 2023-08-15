import {
  ChatBubbleOvalLeftEllipsisIcon,
  ScaleIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const SupportPage = () => {
  return (
    <div className="mt-20 h-auto w-full overflow-auto p-4">
      <div className="grid gap-4 space-y-10">
        <div>
          <ScaleIcon className="mx-auto h-20 w-20" />
          <p className="text-center">신고 접수</p>
        </div>

        <div>
          <ChatBubbleOvalLeftEllipsisIcon className="mx-auto h-20 w-20" />
          <p className="text-center">고객 센터</p>
        </div>

        <div>
          <PhoneIcon className="mx-auto h-20 w-20" />
          <p className="text-center">유선 상담</p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
