import Empty from "../../UI/Empty";
import Loader from "../../UI/Loader";
import toLocalDateShort from "../../Utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../Utils/toPersianNumbers";
import truncateText from "../../Utils/truncateText";
import useOwnerProjects from "./useOwnerProjects";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loader />;

  if (!projects.length) return <Empty resourceName={"پروژه ای"} />;

  return (
    <div className="overflow-x-auto bg-secondary-0">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ProjectTable;
