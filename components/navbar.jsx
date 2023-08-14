import Link from "next/link";

const Navbar = () => {
  return (
    <>
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link href="/">
        <div className="text-xl font-semibold ms-5">Home</div>
      </Link>
      <Link
        href="/create"
          className="mt-3 text-white bg-[#6469ff] font-medium  rounded-md text-sm sm:w-24 xs:w-full px-5 py-2.5 text-center"
      >
        Add
      </Link>
    </nav>
    </>
  );
};

export default Navbar;
