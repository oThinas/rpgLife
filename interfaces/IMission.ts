export interface IMission {
  id: number;
  name: string;
  xp: number;
  type: 'daily' | 'weekly';
  completed: boolean;
}
