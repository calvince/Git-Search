export class User {
    constructor(
      public login: string,
      public avatar_url: string,
      public html_url: string,
      public name: string,
      public public_repos: number,
      public followers: number,
      public following: number
    ){}
}
