import { IApi } from 'dumi';

export default async (api: IApi) => {
  api.modifyRoutes((routes: any[]) => {
    return routes;
  });
};
