import Header from "../UI/Header";

function Home() {
  return (
    <div className="">
      <Header />

      <div className="mb-[100px]">
        <div className="h-[300px] bg-primary-400">
          <div className="container flex items-center justify-between xl:max-w-screen-lg">
            <img
              className="h-[335px] w-[600px]"
              src="/Images/header.png"
              alt="header image"
            />

            <span className="inline-block w-[400px] text-wrap text-center text-5xl font-black leading-[4.5rem] text-secondary-800">
              به سایت فریلنسری خوش آمدید
            </span>
          </div>
        </div>

        <div className="grid-rows-[10px _ 1fr] container mt-16 grid grid-cols-2 justify-items-center text-secondary-900 xl:max-w-screen-lg">
          <span className="col-span-2 mb-12 text-2xl font-bold">
            این سایت برای چه کسانی مناسب می باشد
          </span>

          <div className="flex flex-col items-center">
            <img
              className="mb-8 h-[150px] w-[250px]"
              src="/Images/owner.png"
              alt="owner image"
            />

            <span className="text-xl font-bold">کارفرما ها</span>

            <div className="flex gap-x-2">
              <span className="text-2xl font-bold">&bull;</span>
              <span className="pt-1 text-base">
                ایجاد پروژه در دسته بندی های مختلف
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="mb-8 h-[150px] w-[250px]"
              src="/Images//freelancer.png"
              alt="freelancer image"
            />

            <span className="text-xl font-bold">فریلنسر ها</span>

            <div className="flex gap-x-2">
              <span className="text-2xl font-bold">&bull;</span>
              <span className="pt-1 text-base">
                درخواست انجام پروژه های مختلف
              </span>
            </div>
          </div>
        </div>

        <div className="grid-rows-[10px _ 1fr] container mt-16 grid grid-cols-2 items-center justify-items-center text-secondary-900 xl:max-w-screen-lg">
          <span className="col-span-2 mb-8 text-2xl font-bold">
            قابلیت های این سایت
          </span>

          <ul className="flex list-disc flex-col gap-y-4 text-xl">
            <li>
              تغییر دادن تم سایت به کمک{" "}
              <a
                className="transition-all duration-300 hover:text-primary-900"
                href="https://tailwindcss.com"
              >
                tailwind-css
              </a>
            </li>
            <li>ورود به سایت از طریق کد otp</li>
            <li>
              اعتبار سنجی فرم ها از طریق{" "}
              <a
                className="transition-all duration-300 hover:text-primary-900"
                href="https://www.react-hook-form.com/"
              >
                react-hook-form
              </a>
            </li>
            <li>
              فچ کردن دیتا به کمک{" "}
              <a
                className="transition-all duration-300 hover:text-primary-900"
                href="https://tanstack.com/"
              >
                react-query
              </a>
            </li>
          </ul>

          <img
            className="h-[250px] w-[450px]"
            src="/Images/features.png"
            alt="features image"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
