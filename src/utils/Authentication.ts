import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// require("dotenv").config();

class Authentication {
  public static hashingPassword = (password: string): string =>
    bcrypt.hashSync(password, 10);

  public static comparePassword = async (
    password: string,
    hashedPassword: string
  ): Promise<Boolean> => await bcrypt.compare(password, hashedPassword);

  public static generateJWT = async (
    id: number,
    username: string
  ): Promise<string> =>
    await jwt.sign(
      {
        id,
        username,
      },
      process.env.JWT_SECRET_KEY || "secret",
      {
        expiresIn: "4h",
      }
    );
}

export default Authentication;
