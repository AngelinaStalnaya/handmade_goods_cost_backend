import UserService from "../services/UserService.js";

class UserController {
  async create(req, res) {
    try {
      const user = await UserService.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getUser(req, res) {
    try {
      const userData = await UserService.getUser(req.params.id);
      return res.json(userData);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    try {
      const updatedUser = await UserService.update(req.body);
      return res.json(updatedUser);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async delete(req, res) {
    try {
        const deletedUser = await UserService.delete(req.params.id);
        return res.json(deletedUser);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new UserController();
