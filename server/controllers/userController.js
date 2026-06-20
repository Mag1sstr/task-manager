import UserModel from "../models/UserModel.js";

export const getUser = async (req, res) => {
  try {
    const user = await UserModel.find(req.query);

    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
};
export const createUser = async (req, res) => {
  try {
    const user = UserModel.create(req.body);
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
};
