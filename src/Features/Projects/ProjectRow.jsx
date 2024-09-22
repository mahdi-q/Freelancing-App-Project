import Table from "../../UI/Table";
import toLocalDateShort from "../../Utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../Utils/toPersianNumbers";
import truncateText from "../../Utils/truncateText";

function ProjectRow({ project, index }) {
  return (
    <Table.Row>
      <td>{index + 1}</td>

      <td>{truncateText(project.title, 30)}</td>

      <td>{project.category.title}</td>

      <td>{toPersianNumbersWithComma(project.budget)}</td>

      <td>{toLocalDateShort(project.deadline)}</td>

      <td>
        <div className="flex max-w-[200px] flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>

      <td>{project.freelancer?.name || "-"}</td>

      <td>
        {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </td>

      <td>...</td>
    </Table.Row>
  );
}
export default ProjectRow;
