import User from "./User";

const UserList = ({ users }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridRowGap: 30,
        marginTop: 30,
      }}
    >
      {users.map((user, key) => (
        <div>
          <User user={user} key={key} />
        </div>
      ))}
    </div>
  );
};

export default UserList;