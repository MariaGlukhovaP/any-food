import { User } from "./user";
import { useGetUsersQuery } from "../../redux/services/api";

export const UserContainer = ({ userId }) => {
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id }) => id === userId),
    }),
  });

  if (!user?.name) return null;

  return <User name={user.name} />;
};
