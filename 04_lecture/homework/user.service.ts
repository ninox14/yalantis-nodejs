interface UserDto extends Omit<IUser, 'id'> {}

interface IUser {
  id: number;
  name: string;
  mail: string;
  password: string;
}

class UserService {
  private users: IUser[] = [];

  registerUser(user: UserDto) {
    if (this.users.find((member) => member.mail === user.mail)) {
      throw new Error('User with this email already exists');
    }
    const newMember = { ...user, id: this.users.length + 1 };
    this.users.push(newMember);

    return {
      id: newMember.id,
      userName: newMember.name,
      userEmail: newMember.mail,
    };
  }
}
