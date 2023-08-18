// import LineChart from "@/components/lineGraph"
import dynamic from "next/dynamic";
import { useUserContext } from "@/components/datacontext";
import Link from "next/link";

const Graph = () => {
  const DynmaicComp = dynamic(() => import("../components/lineGraph"), {
    ssr: false, loading: () => <p>Loading</p>
  })
  const { userData, setUserData } = useUserContext()
  // console.log(`userdata from context`, userData);
  return (
    <>
      <section className="m-5">
        <Link href='/'><button
          type="submit"
          className="mt-3 text-white bg-[#6469ff] font-medium  rounded-md text-sm sm:w-24 xs:w-full px-5 py-2.5 text-center"
        >
          back
        </button></Link>
        {userData.length !== 0 ? <DynmaicComp data={userData} /> : (
          <p>no data found</p>
        )}
      </section>

    </>
  )
}

export default Graph