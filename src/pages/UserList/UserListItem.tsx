import { DeleteOutlined } from "@ant-design/icons";
import { List, Avatar, Button } from "antd";
import { API_RANDOM_AVATAR_URL } from "../../constants/apiConstants";
import { User } from "../../types/user.types";

interface UserListItemProps {
  item: User;
  index: Number;
  onDelete: (id: string) => void;
}

const UserListItem = ({ item, index, onDelete }: UserListItemProps) => {
  return (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src={`${API_RANDOM_AVATAR_URL}${index}`} />}
        title={item.name}
        description={item.email}
      />
      <Button
        type="text"
        onClick={() => onDelete(item.id)}
        icon={<DeleteOutlined />}
        danger
      />
    </List.Item>
  );
};

export default UserListItem;
