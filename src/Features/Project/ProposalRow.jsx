import Table from "../../UI/Table";
import truncateText from "../../Utils/truncateText";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../Utils/toPersianNumbers";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function ProposalRow({ proposal, index }) {
  const { user, description, duration, price, status } = proposal;

  return (
    <Table.Row>
      <td>{index + 1}</td>

      <td>{truncateText(user.name, 10)}</td>

      <td>{truncateText(description, 50)}</td>

      <td>{toPersianNumbers(duration)} روز</td>

      <td>{toPersianNumbersWithComma(price)}</td>

      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>

      <td>...</td>
    </Table.Row>
  );
}
export default ProposalRow;
