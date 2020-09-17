import React,  {useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(true);
  const [lastUserAddedAt, setLastUserAddedAt] = useState("");
  const [totalUsersInvited, setTotalUsersInvited] = useState(0);
  const [calculatingInvitedUsers, setCalculatingInvitedUsers] = useState(true);
  const [totalPublishedCampaigns, setTotalPublishedCampaigns] = useState(0);
  const [calculatingPublishedCampaigns, setCalculatingPublishedCampaigns] = useState(true);

  return (
    <div className="Main">
      <Users />
    </div>
  );
}

export default App;
