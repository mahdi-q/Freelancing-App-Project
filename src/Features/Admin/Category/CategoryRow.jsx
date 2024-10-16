import { useState } from "react";
import Table from "../../../UI/Table";
import Modal from "../../../UI/Modal";
import { TbPencilMinus } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";
import truncateText from "../../../Utils/truncateText";

function CategoryRow({ index, category }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>

      <td>{category.title}</td>

      <td>{truncateText(category.description, 60)}</td>

      <td>{category.englishTitle}</td>

      <td>{category.type}</td>

      <td>
        <div className="flex items-center justify-center gap-x-2 text-right">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="h-5 w-5 text-primary-900" />
            </button>

            <Modal
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
              title={`ویرایش ${category.title}`}
            >
              ...
            </Modal>
          </>

          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className="h-5 w-5 text-error" />
            </button>

            <Modal
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
              title={`حذف ${category.title}`}
            >
              ...
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
}
export default CategoryRow;
