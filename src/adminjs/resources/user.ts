// src/adminjs/resources/user.ts

import { ResourceOptions } from "adminjs";

const userResourceOptions: ResourceOptions = {
  navigation: 'Administração',
  properties: {
    birth: {
      type: 'date' //input on front-end
    },
    password: {
      type: 'password' //in db string, in front is password
    },
    role: {
      availableValues: [ //properti of adminJS
        { value: 'admin', label: 'Administrador' }, // {from db, from front-end}
        { value: 'user', label: 'Usuário Padrão' }
      ]
    }
  },
  editProperties: [
    'firstName',
    'lastName',
    'phone',
    'birth',
    'email',
    'password',
    'role'
  ],
  filterProperties: [
    'firstName',
    'lastName',
    'phone',
    'birth',
    'email',
    'role',
    'createdAt',
    'updatedAt'
  ],
  listProperties: [
    'id',
    'firstName',
    'email',
    'role'
  ],
  showProperties: [
    'id',
    'firstName',
    'lastName',
    'phone',
    'birth',
    'email',
    'role',
    'createdAt',
    'updatedAt'
  ],
}

export { userResourceOptions }
