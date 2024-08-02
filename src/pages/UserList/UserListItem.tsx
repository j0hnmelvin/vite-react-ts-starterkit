import { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { List, Avatar, Button, Drawer } from "antd";
import UserDetail from "../UserDetail/UserDetail";
import { API_RANDOM_AVATAR_URL } from "../../constants/apiConstants";
import { User } from "../../types/user.types";

interface UserListItemProps {
  item: User;
  index: number;
  onDelete: (id: string) => void;
}

const UserListItem = ({ item, index, onDelete }: UserListItemProps) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <List.Item
      key={item.id}
      actions={[
        <a onClick={showDrawer}>View Profile</a>,
        <Button
          type="text"
          onClick={() => onDelete(item.id)}
          icon={<DeleteOutlined />}
          danger
        />,
      ]}
    >
      <List.Item.Meta
        avatar={
          <Avatar alt="Avatar" src={`${API_RANDOM_AVATAR_URL}${index}`} />
        }
        title={item.name}
      />
      <Drawer
        width={640}
        placement="right"
        closable={true}
        onClose={onClose}
        open={open}
        title={`User #${item.id}`}
      >
        <UserDetail user={item} />
      </Drawer>
    </List.Item>
  );
};

export default UserListItem;
