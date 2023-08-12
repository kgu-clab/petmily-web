import { useParams } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';

const AnimalPage = () => {
  const { id } = useParams();

  return (
    <div>
      <div className="gird-cols-2 grid gap-4">
        <div className="col-span-2">
          <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
            alt=""
            className="h-96 w-full rounded-lg object-cover"
          />
        </div>

        <div className="w-full rounded-lg bg-white p-6">
          <ul className="list-inside list-disc">
            <li>게시글번호: {id}</li>
            <li>분양업체</li>
            <li>동물판매업번호</li>
            <li>연락처</li>
          </ul>
        </div>

        <div className="w-full rounded-lg bg-white p-6">
          <ul className="list-inside list-disc">
            <li>품종</li>
            <li>암/수</li>
            <li>태어난 날</li>
            <li>분양가능지역</li>
            <li>희망분양가</li>
          </ul>
        </div>

        <div className="col-span-2 bg-white">
          <Editor
            initialValue=" "
            placeholder="내용을 입력하세요."
            height="600px"
            initialEditType="wysiwyg"
            hideModeSwitch
            useCommandShortcut
          />
        </div>
      </div>
    </div>
  );
};

AnimalPage.propTypes = {};

export default AnimalPage;
