import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { param, get, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class LoginController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @get("/login")
  async logIn(
    @param.query.string("email") email: string,
    @param.query.string("password") password: string
  ): Promise<Array<User>> {

    if (!email || !password) {
      throw new HttpErrors.Unauthorized('Invalid email or password.')
    }

    return await this.userRepo.find({
      where: {
        email, password
      }
    })
  }
}
