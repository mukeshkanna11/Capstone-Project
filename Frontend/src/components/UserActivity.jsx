import { useState } from "react";

const UserActivity = () => {
  const [userActivities, setUserActivities] = useState([
    { id: 1, username: "Alice", action: "Viewed Property", timestamp: "2024-12-10 14:30" },
    { id: 2, username: "Bob", action: "Saved Property", timestamp: "2024-12-10 15:00" },
  ]);

  return (
    <div>
      <h4 className="mb-4 text-xl font-semibold">User Activity</h4>

      <table className="w-full border border-collapse border-gray-300 table-auto">
        <thead>
          <tr>
            <th className="p-2 border">Username</th>
            <th className="p-2 border">Action</th>
            <th className="p-2 border">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {userActivities.map((activity) => (
            <tr key={activity.id}>
              <td className="p-2 border">{activity.username}</td>
              <td className="p-2 border">{activity.action}</td>
              <td className="p-2 border">{activity.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserActivity;
