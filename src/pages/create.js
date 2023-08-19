import React, { useState } from "react";
import FormField from "../components/FormField";
import axios from "axios";
import Image from "next/image";
import Navbar from "../components/navbar";
import Link from 'next/link';
export default function CreatePage() {
  const [formData, setFormData] = useState({
    client_id: "",
    camera: "",
    usecase: "",
    date: "",
    time: "",
    image: "",
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setPreview(URL.createObjectURL(file));
      setFormData({ ...formData, image: base64 });
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form data", formData);
    try {
      setLoading(true)
      const response = await axios.post("/api/user", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert('data saved')
      console.log("User created successfully", response);
    } catch (error) {
      console.log({ error });
      alert('something went wrong', error)
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto mt-10 px-5">
        <div>
          <h1 className="font-extrabold text-[#222328] text-[32px]">
            ADD DATA
          </h1>
        </div>

        <form className="mx-w-3xl my-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <FormField
              labelName="Clint id"
              type="text"
              name="client_id"
              placeholder="Clint id"
              value={formData.client_id}
              handleChange={handleChange}
            />
            <FormField
              labelName="Camera"
              type="text"
              name="camera"
              placeholder="Camera"
              value={formData.camera}
              handleChange={handleChange}
            />
            <FormField
              labelName="Usecase"
              type="text"
              name="usecase"
              placeholder="Usecase"
              value={formData.usecase}
              handleChange={handleChange}
            />
            <FormField
              labelName="Date"
              type="Date"
              name="date"
              placeholder="Date"
              value={formData.date}
              handleChange={handleChange}
            />
            <FormField
              labelName="Time"
              type="time"
              name="time"
              placeholder="Time"
              value={formData.time}
              handleChange={handleChange}
            />
            <FormField
              labelName="Image"
              type="file"
              name="image"
              placeholder="Image"
              handleChange={handleFileChange}
            />
            {/* if image is selected */}
            {preview && (
              <Image src={preview} width={600} height={600} alt="Preview" />
            )}
            <div className="flex flex-col sm:flex-row">
              <button
                type="submit"
                className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2 bg-[#6469ff]  hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
              >
                {loading ? "Submitting..." : "SUBMIT"}

              </button>
              <Link href='/'><button
                type="button"
                className="w-full sm:w-auto bg-[#6469ff]  hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
              >
                BACK
              </button></Link></div>
          </div>
        </form>
      </section>
    </>
  );
}
