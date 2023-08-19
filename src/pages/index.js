import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/loader";
import Navbar from "../components/navbar";
import datajson from '../components/data.json'
import { downloadImage } from "../components/filesaver";
import { useUserContext } from "@/components/datacontext";

export default function Home() {
  // const [data, setData] = useState(datajson);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("")
  const {userData, setUserData} = useUserContext()

  const [selectedImage, setSelectedImage] = useState("");
  const openImageModal = (imageUrl, id) => {
    setSelectedImage(imageUrl);
    setId(id)
  };
  
const headings = [
  "CLINT ID",
  "CAMERA",
  "USECASE",
  "DATE",
  "TIME",
  "IMAGE"
]
  const closeImageModal = () => {
    setSelectedImage(null);
  };
  //  setUserData(data)
  //  console.log( typeof userData);
/*  fetch data from getdata api */
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/getdata");
      setData(response?.data);
      const datacontext = response.data
      setUserData(datacontext) 
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <section>
        <Navbar />
        <div className="tabel-section mx-5 my-5">
          <h1 className="my-5 font-extrabold text-[#222328] text-[32px]">
            Data Table
          </h1>
          {/* show loading before component render */}
          {loading ? <div className="flex justify-center items-center">
            <Loader />
          </div> : (<table className="min-w-full border-2 tabel-auto text-xs sm:text-base lg:text-xl">
            <thead className="bg-gray-200">  
             <tr>
                {headings.map((heading, index) => (
                  <th key={index} className="py-3 text-md">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index} className="text-center">
                  <td>{item.client_id}</td>
                  <td>{item.camera}</td>
                  <td>{item.usecase}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td >
                    <Image
                      src={item.image}
                      alt={`Image ${index}`}
                      width={0}
                      height={0}
                      className="min-w-full mt-2 overflow-hidden"
                      onClick={() => openImageModal(item.image, item._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>)}

          {selectedImage && (
            <div className=" fixed inset-0 flex justify-center z-50 bg-black">
              <div className="max-w-screen-xl">
                <Image
                  src={selectedImage}
                  alt="Full Screen"
                  fill={true}
                  className="w-full object-contain"
                />
                <div className="mt-4 absolute bottom-10 z-1000">
                  <button
                    type="button"
                    onClick={() => downloadImage(selectedImage, client_id)}
                    className="inline-flex items-center outline-1 bg-slate-700 hover:bg-blue-600  text-white px-4 py-2 rounded"
                  >
                    <svg
                      class="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    Download
                  </button>
                </div>
                <button
                  onClick={closeImageModal}
                  className="absolute top-4 right-4 p-2 text-white text-xl rounded bg-red-400 hover:text-red-400 hover:bg-white"
                >
                  close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
     
      {/* <div className="m-5">
       {show?"" :<button className=" bg-blue-500 text-white px-6 py-2 mr-5 rounded" onClick={()=>setshow(true)}>show chart</button>}
        {show && <DynmaicComp data={data}/>}
      </div> */}
    </>
  );
}
