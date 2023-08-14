// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../components/models/userModel";
import connectDB from "../../components/mongodb/connect";
export const config = {
  api: { responseLimit: "20mb" },
  bodyParser: { sizeLimit: "20mb" },
};
connectDB();

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      //fetch all data from 'datas' collection
      const data = await User.find();
      return res.status(200).send(data);
    }
  } catch (error) {
    console.error("Error occurred /stats", error);
    return res.status(500).send({ error: error?.message });
  }
}
