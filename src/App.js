import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Users from "./components/Users";
import Axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(true);
  const [lastUserAddedAt, setLastUserAddedAt] = useState("");
  const [totalUsersInvited, setTotalUsersInvited] = useState(0);
  const [calculatingInvitedUsers, setCalculatingInvitedUsers] = useState(true);
  const [totalPublishedCampaigns, setTotalPublishedCampaigns] = useState(0);
  const [
    calculatingPublishedCampaigns,
    setCalculatingPublishedCampaigns,
  ] = useState(true);

  useEffect(() => {
    (async () => {
      //fetch data
      const result = await Axios("http://localhost:3000/example_data.json");
      //sort data by created_at newest first
      const newest = await result.data.slice().sort((a, b) => {
        let c = new Date(a.created_at);
        let d = new Date(b.created_at);
        return d - c;
      });

      setLastUserAddedAt(newest[0].name);
      setUsers(newest);
    })();
  }, []);

  return (
    <div className="Main">
      <Users data={users}/ >
    </div>
  );
}

export default App;
