import User from "../models/User.js";
import bcrypt from "bcrypt";

const hashingPassword = async (userPassword) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(userPassword, saltRounds);
  return hashedPassword;
};

const compareLoginPasswords = async (inputPassword, DBPassword) => {
  return await bcrypt.compare(inputPassword, DBPassword)
};

class UserService {
  async create(user) {
    const hashedPassword = await hashingPassword(user.password);
    const createdUser = await User.create({
      ...user,
      password: hashedPassword,
    });
    return createdUser;
  }

  async getUser(id) {
    if (!id) {
      throw new Error("There is no ID");
    }
    const userData = await User.findById(id);
    return userData;
  }

  async update(user) {
    if (!user._id) {
      throw new Error("There is no ID");
    }
    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      new: true,
    });
    return updatedUser;
  }

  async delete(id) {
    if (!id) {
      throw new Error("There is no ID");
    }
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
  }

  async authUser(authData) {
    if (!authData) {
      throw new Error("There is no auth data");
    }
    const authedUser = await User.findOne({ login: authData.login });
    if (authedUser === null) return authedUser;
    const findUserWithPassword = await compareLoginPasswords(
      authData.password,
      authedUser.password
    );
    if (findUserWithPassword) {
      return authedUser;
    } else {
      return "Wrong password";
    }
  }
}

export default new UserService();
