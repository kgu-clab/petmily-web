import AnimalCard from '@components/AnimalCard';
import ContentCard from '@components/ContentCard';
import Titlebar from '@components/Titlebar';
import PropTypes from 'prop-types';

const Section = ({ title, sub }) => {
  return (
    <div>
      <Titlebar title={title} sub={sub} />
      <div className="mt-4 grid grid-cols-5 gap-4">
        <AnimalCard
          title="시고르자브종"
          provider="한관희동물보호소"
          price="100,000"
        />
        <AnimalCard
          title="시고르자브종"
          provider="한관희동물보호소"
          price="100,000"
        />
        <AnimalCard
          title="시고르자브종"
          provider="한관희동물보호소"
          price="100,000"
        />
        <AnimalCard
          title="시고르자브종"
          provider="한관희동물보호소"
          price="100,000"
        />
        <AnimalCard
          title="시고르자브종"
          provider="한관희동물보호소"
          price="100,000"
        />
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
};

const Root = () => {
  return (
    <div className="flex flex-col gap-10">
      <Section
        title="전문업체분양"
        sub="팻밀리가 검증한 전문업체 분양입니다."
      />

      <Section
        title="보호소분양"
        sub="보호소에서 보호하고 있는 반려동물입니다."
      />

      <Section title="개인무료분양" sub="개인 가정의 무료 분양입니다." />

      <Titlebar
        title="새로나온 가이드"
        sub="최근에 올라온 반려동물 가이드입니다."
      />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <ContentCard
            title="강아지 닭고기 간식 추천 10가지 - 맛있고 건강하게!"
            date="23.08.11"
            image="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
          />
        </div>

        <div>
          <ContentCard
            title="고양이 만세 자세, 왜 이러고 자는 걸까?"
            date="23.08.11"
            image="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1143&q=80"
          />
        </div>

        <div>
          <ContentCard
            title="고양이 울타리 추천 제품 10가지"
            date="23.08.11"
            image="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
        </div>

        <div className="col-span-2">
          <ContentCard
            title="강아지 닭고기 간식 추천 10가지 - 맛있고 건강하게!"
            date="23.08.11"
            image="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
          />
        </div>
      </div>

      <Titlebar
        title="인기 지식정보"
        sub="현재까지 꾸준한 조회수와 좋아요가 높은 지식정보입니다."
      />

      <h2 className="font-bold text-gray-700">#행동</h2>
      <div className="grid grid-cols-3 gap-4">
        <ContentCard
          title="고양이 울타리 추천 제품 10가지"
          date="23.08.11"
          image="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
        <ContentCard
          title="고양이 울타리 추천 제품 10가지"
          date="23.08.11"
          image="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
        <ContentCard
          title="고양이 울타리 추천 제품 10가지"
          date="23.08.11"
          image="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
      </div>

      <h2 className="font-bold text-gray-700">#심리</h2>
      <div className="grid grid-cols-3 gap-4">
        <ContentCard
          title="고양이 울타리 추천 제품 10가지"
          date="23.08.11"
          image="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
        <ContentCard
          title="고양이 울타리 추천 제품 10가지"
          date="23.08.11"
          image="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
        <ContentCard
          title="고양이 울타리 추천 제품 10가지"
          date="23.08.11"
          image="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
      </div>

      <h2 className="font-bold text-gray-700">#관리</h2>
      <div className="grid grid-cols-3 gap-4">
        <ContentCard
          title="고양이 울타리 추천 제품 10가지"
          date="23.08.11"
          image="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
        <ContentCard
          title="고양이 울타리 추천 제품 10가지"
          date="23.08.11"
          image="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
        <ContentCard
          title="고양이 울타리 추천 제품 10가지"
          date="23.08.11"
          image="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
      </div>
    </div>
  );
};

Root.propTypes = {};

export default Root;
