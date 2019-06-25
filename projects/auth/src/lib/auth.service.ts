import { Injectable } from '@angular/core';

export interface User {
  name: string;
  lastname: string;
  email: string;
  role?: string;
}

export interface UserElement {
  register: string;
  password: string;
  user: User;
}

const ELEMENTS_USER: UserElement[] = [
  { register: 'S36413', password: 'psalguero', user: {
      name: 'Patrick',
      lastname: 'Salguero Avalos',
      email: 'psalgueroa@intercorp.com.pe',
      role: 'ADMIN'
    },
  },
  { register: 'XT7226', password: '1234567', user: {
      name: 'Paul',
      lastname: 'Huanca ',
      email: 'phuanca@intercorp.com.pe',
      role: 'USER'
    },
  }
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async authenticate(register: string, password: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      const userFound: UserElement = ELEMENTS_USER
        .find((user: UserElement, index: number ) => user.register === register);

      if (userFound !== undefined) {
        resolve(userFound.user);
      } else {
        reject(null);
      }
    });
  }
}
