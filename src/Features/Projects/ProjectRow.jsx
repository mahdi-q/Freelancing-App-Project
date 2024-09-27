import { TbPencilMinus } from "react-icons/tb";
import Table from "../../UI/Table";
import toLocalDateShort from "../../Utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../Utils/toPersianNumbers";
import truncateText from "../../Utils/truncateText";
import { HiOutlineTrash } from "react-icons/hi";
import { useState } from "react";
import Modal from "../../UI/Modal";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

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

      <td>
        <div className="flex items-center justify-center gap-x-2 text-right">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="h-5 w-5 text-primary-900" />
            </button>

            <Modal
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
              title={`ویرایش ${project.title}`}
            >
              یک متن تستی ...
            </Modal>
          </>

          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className="h-5 w-5 text-error" />
            </button>

            <Modal
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
              title={`حذف ${project.title}`}
            >
              یک متن تستی ...
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
}
export default ProjectRow;
