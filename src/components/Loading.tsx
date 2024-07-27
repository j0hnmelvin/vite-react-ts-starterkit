import { Spin } from "antd";
import { AxiosError } from "axios";

interface LoadingProps {
  isLoading: boolean;
  error: AxiosError | null;
}

const Loading = ({ isLoading, error }: LoadingProps) => {
  return (
    <>
      <Spin spinning={isLoading} fullscreen />
      {error && (
        <>
          <p>An error occurred:</p>
          <p>{error.message}</p>
          {error.response && (
            <>
              <p>HTTP Status: {error.response.status}</p>
              <p>{error.response.statusText}</p>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Loading;
