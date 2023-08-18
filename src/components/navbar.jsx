import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white ">
      <Link href="/">
        <div className="text-xl font-semibold ms-5">Home</div>
      </Link>
        <div className="flex"><Link
          href="/create"
          className="mt-3 mx-2 justify-end text-white bg-[#6469ff] font-medium  rounded-md text-sm sm:w-24 px-5 py-2.5 text-center"
        >
          Add
        </Link>
          <Link
            href="/chart"
            className="mt-3 text-white bg-[#6469ff] font-medium  rounded-md text-sm sm:w-24 px-5 py-2.5 text-center"
          >
            Chart
          </Link></div>

    </nav>
    </>
  );
};

export default Navbar;
