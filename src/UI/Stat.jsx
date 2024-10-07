import { toPersianNumbers } from "../Utils/toPersianNumbers";

const colors = {
  primary: "bg-primary-100 p-2 text-primary-700",
  green: "bg-green-100 p-2 text-green-700",
  yellow: "bg-yellow-100 p-2 text-yellow-700",
};

function Stat({ icon, title, value, color }) {
  return (
    <div className="col-span-1 grid grid-cols-[5.4rem_1fr] grid-rows-2 items-center gap-x-8 gap-y-3 rounded-lg bg-secondary-0 p-4">
      <div
        className={`row-span-2 flex aspect-square items-center justify-center rounded-full ${colors[color]}`}
      >
        {icon}
      </div>

      <span className="text-xl font-bold text-secondary-600 self-center">{title}</span>

      <span className="text-3xl font-bold text-secondary-800">{toPersianNumbers(value)}</span>
    </div>
  );
}
export default Stat;
