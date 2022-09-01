import { type } from 'os'
import { db } from '../src/utilis/db.server'

type User = {
  avatar?: string
  firtName: String
  lastName: String
  email: String
  workAt?: String
  inRelation?: Boolean
  location?: String
}

type Post = {
  createdBy: String
  media?: String
  text: String
}

type Follower = {
  followedUserId: String
  followingUserId: String
}

type Reaction = {
  reactedTo: String
  reactedBy: String
}

type Comment = {
  commentedBy: String
  comment: String
}

const getUser = (): Array<User> => {
  return [
    {
      avatar: '',
      firtName: 'Jhon',
      lastName: 'Doe',
      email: 'jhondoe@gmail.com',
      workAt: 'google',
      location: 'French'
    },
    {
      avatar: 'https://www.williamshakespeare.net/images/shakespeare.jpg',
      firtName: 'William',
      lastName: 'Shakespeare',
      email: 'william@gmail.com',
      workAt: 'Art',
      inRelation: true,
      location: 'United kingdom'
    },
    {
      avatar:
        'https://assets.weforum.org/sf_account/image/OYPGh90FjJt0XME4g2dW5jxEQzBdvNv7YPGsrt8tqds.jpg',
      firtName: 'Yuval Noah',
      lastName: 'Harari',
      email: 'Harari@gmail.com',
      workAt: 'Historien',
      inRelation: true,
      location: 'Israël'
    }
  ]
}
