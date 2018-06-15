import * as React from 'react'
import { IProfile } from '../interfaces/profile'

const Profile = ({ user: { name } }: IProfile) => {
  if (name === '') {
    throw new Error('bye-bye')
  }

  return <div className="hello">Hello {name}</div>
}

export default Profile
