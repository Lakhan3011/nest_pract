import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'Welcome back! Signed up' };
  }

  signin() {
    return { msg: 'Welcome back! Signed In' };
  }
}
