export const getURI = (
  host: string,
  port: number,
  databaseName: string,
): string => `mongodb://${host}:${port}/${databaseName}`;

/* TODO Don't work with username & pass
export const getURI = (
  username: string,
  password: string,
  host: string,
  port: number,
  databaseName: string,
): string => `mongodb://${username}:${password}@${host}:${port}/${databaseName}`;
*/
