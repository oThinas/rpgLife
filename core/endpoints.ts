export const endpoints = {
  character: '/character',

  mission: {
    getall: '/mission/getAll',
    create: '/mission/create',
    complete(id: number) {
      return `/mission/${id}/done`;
    },
    delete(id: number) {
      return `/mission/${id}/delete`;
    },
  },
};
