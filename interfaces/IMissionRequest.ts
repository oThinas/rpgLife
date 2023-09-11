export interface IMissionRequest {
  name: string;
  period: 'daily' | 'weekly';
  exp: number;
}
