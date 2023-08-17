import PropTypes from 'prop-types';
import Titlebar from '@components/ui/Titlebar';

import { formatCurrency } from '@common/utils';
import Table from '@components/ui/Table';

const MypageStoreInfo = ({ data }) => {
  console.log(data);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <Titlebar title="등록 상품" sub="스토어에 등록한 상품 리스트입니다." />

        <Table
          className="mt-4"
          headers={['주문번호', '상품명', '금액', '기능']}
        >
          <tr className="hover:bg-gray-100">
            <td className="w-32 p-2">1234</td>
            <td>휴대용 파우치</td>
            <td>{formatCurrency(10000)} 원</td>
            <td>23.08.13</td>
          </tr>
        </Table>
      </div>

      <div>
        <Titlebar title="구매 내역" sub="스토어에서 거래한 내역입니다." />

        <Table
          className="mt-4"
          headers={['주문번호', '상품명', '금액', '결제일']}
        >
          <tr className="hover:bg-gray-100">
            <td className="w-32 p-2">1234</td>
            <td>휴대용 파우치</td>
            <td>{formatCurrency(10000)} 원</td>
            <td>23.08.13</td>
          </tr>
        </Table>
      </div>
    </div>
  );
};

MypageStoreInfo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MypageStoreInfo;
