import config from '../../../config/index'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId()

  user.id = id
  //    Default Password
  if (!user.password) {
    user.password = config.DEFAULT_USER_PASS as string
  }

  const createUser = await User.create(user)

  if (!createUser) {
    throw new Error('Failed to create user ! ')
  }
  return createUser
}

export default {
  createUser,
}
