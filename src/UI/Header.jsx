import useUser from "../Features/Authentication/useUser";

function Header() {
  const {data} = useUser();
  console.log(data);

  return <div className="bg-secondary-0 px-8 py-4">App Header</div>;
}
export default Header;
