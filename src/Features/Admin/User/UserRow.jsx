import Table from "../../../UI/Table";
import { toPersianNumbers } from "../../../Utils/toPersianNumbers";

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

const roles = {
  ADMIN: "ادمین",
  OWNER: "کارفرما",
  FREELANCER: "فریلنسر",
};

function UserRow({ user, index }) {
  const { name, email, phoneNumber, role, status } = user;

  return (
    <Table.Row>
      <td>{index + 1}</td>

      <td>{name || "-"}</td>

      <td>{email || "-"}</td>

      <td>{toPersianNumbers(phoneNumber)}</td>

      <td>{roles[role] || "-"}</td>

      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>

      <td>...</td>
    </Table.Row>
  );
}
export default UserRow;
