import User from "../../components/models/userModel";
import * as dotenv from "dotenv";
import connectDB from "../../components/mongodb/connect";
dotenv.config();
connectDB();
export const config = {
  api: { responseLimit: "20mb" },
  bodyParser: { sizeLimit: "20mb" },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { client_id, camera, usecase, date, time, image } = req.body;

    try {
      // Create a new user instance
      const newUser = new User({
        client_id,
        camera,
        usecase,
        date,
        time,
        image,
      });
      await newUser.save();
      return res
        .status(201)
        .json({ Data: newUser, message: "User created successfully server" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error creating user", error });
    }
  }
}
