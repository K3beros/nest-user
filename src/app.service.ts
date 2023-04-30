import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUser(): string {
    return `Welcome to the homepage`;
  }
}
