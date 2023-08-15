import PropTypes from 'prop-types';
import { Textarea, Button } from '@material-tailwind/react';
import { useState } from 'react';

const CommentBoxTextarea = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    onCommentSubmit(comment);
    setComment('');
  };

  return (
    <div className="relative">
      <Textarea
        variant="static"
        placeholder="댓글을 남겨주세요"
        value={comment}
        onChange={handleCommentChange}
      />
      <div className="flex w-full py-1.5">
        <div className="flex gap-2">
          <Button
            className="rounded-md bg-white text-pm-main"
            onClick={() => setComment('')}
          >
            취소
          </Button>
          <Button className="rounded-md bg-pm-main" onClick={handleSubmit}>
            등록
          </Button>
        </div>
      </div>
    </div>
  );
};

CommentBoxTextarea.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
};

const PostPage = () => {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    if (comment !== '') {
      setComments([...comments, comment]);
    }
  };

  const postDetail = [
    {
      sort: '가이드',
      title: '동물 등록이 어려우시다면?',
      date: '2023/8/15',
      click: 46,
      content: 'aaa',
    },
  ];

  return (
    <div className="flex">
      {postDetail.map(({ sort, title, date, click, content }) => {
        return (
          <div className="ml-6 w-full space-y-4" key={title}>
            <hr />
            <h1 className="b-4 border-b border-gray-500 pb-4 text-3xl font-bold">
              {title}
            </h1>
            <hr />
            <div className="flex text-sm">
              <span className="border-r border-gray-500 px-2">{sort}</span>
              <span className="border-r border-gray-500 px-2">{date}</span>
              <span className="px-2">조회 수 : {click}</span>
            </div>
            <hr />
            <div className="mt-4 h-auto w-full overflow-auto bg-white p-4">
              <p className="p-4">{content}</p>
            </div>
            <CommentBoxTextarea onCommentSubmit={addComment} />
            <div className="space-y-8 pt-4">
              {comments.map((comment, index) => (
                <div className="border-b border-gray-400 p-1" key={index}>
                  {index + 1}번째 댓글 : {comment}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostPage;
