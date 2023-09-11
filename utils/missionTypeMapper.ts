export function missionTypeMapper(missionTypeId: '1' | '2'): 'daily' | 'weekly' {
  const missionTypeMap = {
    1: 'daily',
    2: 'weekly',
  };

  return missionTypeMap[missionTypeId] as 'daily' | 'weekly';
}
