export interface routeInformation {
  readonly label: string
  readonly path: string
  readonly component: string
  readonly type: typeRoutes
}

export enum typeRoutes {
  login = 'login',
  private = 'private',
  public = 'public',
}
