import { Button } from '@material-tailwind/react';
import { DocumentCheckIcon } from '@heroicons/react/24/outline';
import { Alert, SuccessAlert } from '@common/alert';
import { useMutation, useQuery } from 'react-query';
import { getAdoptionBoardsInfo, postContracts } from '@common/api';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ContractPage = () => {
  const { reqId, boardId } = useParams();

  const { data, isSuccess } = useQuery('animalInfo', () =>
    getAdoptionBoardsInfo(boardId),
  );

  const signContractMutate = useMutation(postContracts, {
    onSuccess: () => {
      SuccessAlert({
        title: '계약서',
        text: '계약서 작성을 완료했습니다.',
      });
    },
  });

  const [inputs, setInputs] = useState({
    additionalProvisions: '',
    signature: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onClickApply = () => {
    Alert({
      title: '계약서 보내기',
      text: '해당 내용으로 분양자에게 계약서를 보냅니다.',
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        signContractMutate.mutate({
          content: '',
          gender: data.gender,
          age: +data.age,
          vaccine: data.vaccine,
          isNeutered: data.isNeutered,
          additionalProvisions: inputs.additionalProvisions,
          signature: inputs.signature,
          adoptionRequestId: reqId,
        });
      }
    });
  };

  if (isSuccess)
    return (
      <>
        <div className="w-full bg-white p-10">
          <h1 className="text-center text-2xl font-bold">
            반려동물 분양 계약서
          </h1>

          <div className="mt-10 flex flex-col gap-5">
            <h2 className="font-semibold">기본 조항</h2>
            <p>
              본 계약서는 분양인과 입양인 사이의 계약을 명시하며 분양인과
              입양인은 반려동물분양 이후 아래와 같은 문제 발생시 보상규정에 따른
              보상 또는 법적인 책임을 질 의무가 있다.
            </p>

            <p>
              1. 반려동물분양인(판매자 : 이하 “갑” 이라함) 과 입양인(구매자 :
              이하 “을” 이라함)은 반려동물사랑 및 상호존중과 신의성실에 입각하여
              “갑”이 분양한 반려동물에 대해 다음과 같이 “갑”과 “을” 간에 계약을
              체결한다.
            </p>

            <p>
              2. “갑”은 “을 ”에게 무료 또는 적정의 책임비용을 받고 키우던
              반려동물을 분양하며, “을” 은 반려동물을 입양한 날로부터
              ___개월(이하 “책임기간” 이라함) 이내에, 분양받은 반려동물을 다른
              사람 손에 맏기거나 팔아서는 아니된다.
            </p>

            <p>
              3. “을”은 신의에 입각하여 아래와 같이 서약한다. ᄀ. “책임기간” 내,
              반려동물은 “을”의 양육권 하에 “갑”과 “을” 공동소유임을 확약한다.
              ᄂ. “책임기간” 내, 부득이한 사정 또는 사고로 분양받은 반려동물을
              처분할 시에는 “갑”에게 알릴 의무가 있다. ᄃ. “책임기간” 내
              재분양이 있을 경우, “갑”의 허락 및 새로운 입양자의 연락처를
              알려주어야 한다. ᄅ. “책임기간” 내 재분양이 있을 경우, “갑”이
              허락하지 않는다면, “을”은 반려동물을 그대로 키우거나 “갑”에게 아무
              조건없이 돌려주어야 한다. ᄆ.“갑”은 “책임기간” 이내 해당 날짜를
              공식적으로 확인할 수 있는 반려동물에 대한 인증모습(사진, 동영상)을
              요구할 수 있으며 “을”은 “을”에게 편한 방법으로 반려동물 인증모습을
              제공할 의무가 있다.
            </p>

            <p>
              4. “갑”이 “을” 에게 제공했던 정보와 “을”이 입양했던 반려동물의
              정보가 치명적으로 일치하지 않을 경우에는 “을”은 1달 이내에,
              “갑”에게 반려동물을 돌려줄 수 있으며, “갑”은 이를 거부해선
              아니된다.
            </p>

            <p>
              5. “을”이 계약내용을 이행치 않았을 경우 “갑”이 원하는 경우 입양한
              반려동물을 “갑”에게 돌려 주어야 한다.
            </p>

            <p>
              6. 이 계약과 관련하여 발생하는 “갑”과 “을”간의 모든 분쟁은
              상호협의하여 해결하며 협의에의해 해결되지 않아 소송이 제기되어야
              하는 경우, “갑”의 소재지를 관할하는 법원을 관할 법원으로 한다.
            </p>

            <p>
              7. “갑”과 “을”은 아래의 내용으로 거래를 하며 “갑”이 “을”에게
              제공하는 반려동물과 계약서의 내용은 반드시 일치해야한다.
            </p>

            <div className="grid grid-cols-4 divide-x divide-y border text-center">
              <p className="font-semibold">품종</p>
              <p>{data.species}</p>
              <p className="font-semibold">색상</p>
              <p>{data.color}</p>
              <p className="font-semibold">성별</p>
              <p>{data.gender}</p>
              <p className="font-semibold">나이</p>
              <p>{data.age}</p>
              <p className="font-semibold">필수 접종</p>
              <p>{data.vaccine}</p>
              <p className="font-semibold">중성화</p>
              <p>{data.isNeutered}</p>
            </div>

            <div>
              <h2 className="font-semibold">추가 조항</h2>

              <input
                type="text"
                className="mt-2 w-full border p-4 outline-none"
                placeholder="필요한 추가 조항을 작성해주세요."
                value={inputs.additionalProvisions}
                name="additionalProvisions"
                onChange={onChange}
              />
            </div>

            <div className="flex justify-end">
              <span>서명:</span>
              <input
                type="text"
                className="mx-2 w-20 border-b text-center outline-none focus:border-black"
                value={inputs.signature}
                name="signature"
                onChange={onChange}
              />
              <span>(인)</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <Button className="flex items-center gap-1" onClick={onClickApply}>
            <DocumentCheckIcon className="h-5 w-5" /> 계약서 보내기
          </Button>
        </div>
      </>
    );
};

ContractPage.propTypes = {};

export default ContractPage;
