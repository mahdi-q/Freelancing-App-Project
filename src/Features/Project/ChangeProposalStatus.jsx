import { useForm } from "react-hook-form";
import RHFSelectOption from "../../UI/RHFSelectOption";
import useChangeProposalStatus from "./useChangeProposalStatus";
import Loader from "../../UI/Loader";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتطار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeProposalStatus({ proposal, onClose }) {
  const { register, handleSubmit } = useForm({
    defaultValues: { status: proposal.status },
  });

  const { isUpdating, changeProposalStatus } = useChangeProposalStatus();

  const onSubmit = (data) => {
    changeProposalStatus(
      {
        id: proposal._id,
        data,
      },
      {
        onSuccess: () => {
          onClose();
        },
      },
    );
  };

  return (
    <form className="space-y-4 text-right" onSubmit={handleSubmit(onSubmit)}>
      <RHFSelectOption
        label="تغییر وضعیت درخواست به حالت :"
        name="status"
        options={options}
        register={register}
      />

      {isUpdating ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      )}
    </form>
  );
}
export default ChangeProposalStatus;
