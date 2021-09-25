import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User 
  {
    //verifica se usuario existe antes de torna-lo admin
   const userById = this.usersRepository.findById(user_id);
   if(!userById)
   {
     throw new Error("User does not exist");
   }

  //torna usuario admin
   const userAdmin = this.usersRepository.turnAdmin(userById);
   return userAdmin;
  }
}

export { TurnUserAdminUseCase };
