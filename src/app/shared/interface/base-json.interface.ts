export interface BaseJson<T> {
  data: T;
  message: string;
  success?: boolean;
}
