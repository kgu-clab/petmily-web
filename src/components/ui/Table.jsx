import PropTypes from 'prop-types';
import { Typography } from '@material-tailwind/react';

const Table = ({ className, headers, children }) => {
  return (
    <table
      className={`${className} w-full min-w-max table-auto rounded-lg bg-white text-left`}
    >
      <thead>
        <tr className="border-b border-blue-gray-100 bg-blue-gray-50/50">
          {headers.map((header) => (
            <th className="p-4" key={header}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                {header}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y text-sm">{children}</tbody>
    </table>
  );
};

Table.propTypes = {
  className: PropTypes.string,
  headers: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

export default Table;
