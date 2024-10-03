import User from '../models/User.js';

class UserService {
  async create(user) {
    const cratedUser = await User.create(user);
    return cratedUser;
}

  async getUser(id) {
    if (!id) {
      throw new Error('There is no ID');
    }
    const userData = await User.findById(id);
    return userData;
  }

  async update(user) {
    if (!user._id) {
      throw new Error('There is no ID');
    }
    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      user,
      { new: true }
    );
    return updatedUser;
  }

  async delete(id) {
    if (!id) {
        throw new Error('There is no ID');
    }
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
  }

  async authUser(authData) {
    if (!authData) {
        throw new Error('There is no auth data');
    }
    const authedUserUser = await User.findOne(authData);
    return authedUserUser;
  }
}

export default new UserService();

