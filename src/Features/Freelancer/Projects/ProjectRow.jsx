import Table from "../../../UI/Table";
import toLocalDateShort from "../../../Utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../../Utils/toPersianNumbers";
import truncateText from "../../../Utils/truncateText";

const statusStyle = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSE: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectRow({ index, project }) {
  const { title, budget, deadline, status } = project;
  
  return (
    <Table.Row>
      <td>{index + 1}</td>

      <td>{truncateText(title, 40)}</td>

      <td>{toPersianNumbersWithComma(budget)}</td>

      <td>{toLocalDateShort(deadline)}</td>

      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>

      <td>...</td>
    </Table.Row>
  );
}
export default ProjectRow;
