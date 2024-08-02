import { Row } from "antd";
import "./UserDetail.css";
import { User } from "../../types/user.types";

interface DescriptionItemProps {
  title: string;
  content: React.ReactNode;
}

const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

interface UserDetailProps {
  user: User;
}

const UserDetail = ({ user }: UserDetailProps) => {
  return (
    <>
      <Row>
        <DescriptionItem title="Full Name" content={user?.name} />
      </Row>
      <Row>
        <DescriptionItem title="Email" content={user?.email} />
      </Row>
      <Row>
        <DescriptionItem
          title="Created At"
          content={user?.createdAt.toString()}
        />
      </Row>
      <Row>
        <DescriptionItem
          title="Updated At"
          content={user?.updatedAt.toString()}
        />
      </Row>
    </>
  );
};

export default UserDetail;
