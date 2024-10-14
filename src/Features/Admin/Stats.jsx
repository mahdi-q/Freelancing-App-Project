import { HiCollection, HiUsers, HiViewGrid } from "react-icons/hi";
import Stat from "../../UI/Stat";

function Stats({ users, projects, proposals }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <Stat
        icon={<HiUsers className="h-16 w-16" />}
        title="کاربران"
        value={users.length}
        color="green"
      />

      <Stat
        icon={<HiViewGrid className="h-16 w-16" />}
        title="پروژه ها"
        value={projects.length}
        color="primary"
      />

      <Stat
        icon={<HiCollection className="h-16 w-16" />}
        title="درخواست ها"
        value={proposals.length}
        color="yellow"
      />
    </div>
  );
}
export default Stats;
