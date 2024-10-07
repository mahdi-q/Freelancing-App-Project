function Sidebar({ children }) {
  return (
    <div className="row-span-2 row-start-1 border-l border-secondary-300 bg-secondary-0 p-4">
      <ul className="flex flex-col gap-y-4">{children}</ul>
    </div>
  );
}
export default Sidebar;
