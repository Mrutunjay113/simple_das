// import LineChart from "@/components/lineGraph"
import dynamic from "next/dynamic";
import { useUserContext } from "@/components/datacontext";
import Navbar from "@/components/navbar";

const Graph = () => {
  const DynmaicComp = dynamic(() => import("../components/lineGraph"), {
    ssr: false, loading: () => <p>Loading</p>
  })
  const { userData, setUserData } = useUserContext()
  // console.log(`userdata from context`, userData);
  return (
    <>
      <section>
        <Navbar />
        {userData.length !== 0 ? <DynmaicComp data={userData} /> : (
          <p>no data found</p>
        )}
      </section>

    </>
  )
}

export default Graph