import { useState, useEffect, useRef } from "react";
import { Button, List } from "antd";
import { AxiosError } from "axios";
import UserListItem from "./UserListItem";
import Loading from "../../components/Loading";
import {
  API_BACKEND_URL,
  API_RANDOM_USER_URL,
  API_METHOD,
} from "../../constants/apiConstants";
import { RandomUserResponse } from "../../types/randomUserResponse.types";
import { User } from "../../types/user.types";
import apiUtil from "../../utils/apiUtil";

function UserList() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  const [users, setUsers] = useState<User[]>([]);

  const hasRunOnce = useRef(false);
  useEffect(() => {
    console.log("mounting");

    if (!hasRunOnce.current) {
      // Code that should run only once on mount
      hasRunOnce.current = true;

      setTimeout(() => {
        getUsers();
      }, 2000);
    }

    return () => console.log("unmounting");
  }, []);

  const getUsers = async () => {
    apiUtil({
      url: API_BACKEND_URL,
      method: API_METHOD.GET,
      onSuccess: (data: User[]) => {
        setUsers(data);
      },
      onFailure: (error: any) => {
        console.log(error);
        setError(error);
      },
      onInitial: () => {
        setIsLoading(true);
      },
      onFinal: () => {
        setIsLoading(false);
      },
    });
  };

  const hanldleGenerateRandomUser = async () => {
    apiUtil({
      url: API_RANDOM_USER_URL,
      method: API_METHOD.GET,
      onSuccess: (data: RandomUserResponse) => {
        postUser(data);
      },
      onFailure: (error: any) => {
        console.log(error);
        setError(error);
      },
      onInitial: () => {
        setIsLoading(true);
      },
      onFinal: () => {
        setIsLoading(false);
      },
    });
  };

  const postUser = async (randomUserResonse: RandomUserResponse) => {
    if (randomUserResonse?.results.length) {
      apiUtil({
        url: API_BACKEND_URL,
        method: API_METHOD.POST,
        data: {
          name:
            randomUserResonse.results[0].name.first +
            " " +
            randomUserResonse.results[0].name.last,
          email: randomUserResonse.results[0].email,
        },
        onSuccess: (data: User) => {
          setUsers([...users, data]);
        },
        onFailure: (error: any) => {
          console.log(error);
          setError(error);
        },
        onInitial: () => {
          setIsLoading(true);
        },
        onFinal: () => {
          setIsLoading(false);
        },
      });
    }
  };

  const hanldeDeleteUser = async (id: string) => {
    apiUtil({
      url: `${API_BACKEND_URL}/${id}`,
      method: API_METHOD.DELETE,
      onSuccess: (data: User) => {
        setUsers(users.filter((user) => user.id !== data.id));
      },
      onFailure: (error: any) => {
        console.log(error);
        setError(error);
      },
      onInitial: () => {
        setIsLoading(true);
      },
      onFinal: () => {
        setIsLoading(false);
      },
    });
  };

  return (
    <>
      <Loading isLoading={isLoading} error={error} />
      <Button onClick={hanldleGenerateRandomUser} block>
        Generate Random User
      </Button>
      <List
        itemLayout="horizontal"
        dataSource={users}
        renderItem={(item, index) => (
          <UserListItem item={item} index={index} onDelete={hanldeDeleteUser} />
        )}
      />
    </>
  );
}

export default UserList;
