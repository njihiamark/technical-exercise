import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Users from "./components/Users";
import Axios from "axios";
import UserSummary from "./components/UserSummary";
import { Button } from "semantic-ui-react";

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
  const [teamMemberNos, setTeamMemberNos] = useState(0);
  const [calculatingTeamMemberNos, setCalculatingTeamMemberNos] = useState(
    true
  );
  const [sortDateNext, setSortDateNext] = useState("desc");

  useEffect(() => {
    (async () => {
      //fetch data
      const result = await Axios("http://localhost:3000/example_data.json");
      //sort data by created_at newest first
      const newest = await dateSort(result.data, "desc");

      //we've finished fetchind data
      setUsersLoading(false);

      calculateMembers(newest);
      calculateInvites(newest);
      calculateCampaigns(newest);

      //update these states only when there is data received
      if (newest.length > 0) {
        setLastUserAddedAt(newest[0].name);
        setUsers(newest);
      }
    })();
  }, []);

  const dateSort = (data, order) => {
    let sorted = data.slice().sort((a, b) => {
      let c = new Date(a.created_at);
      let d = new Date(b.created_at);
      if (order === "desc") {
        return d - c;
      } else {
        return c - d;
      }
    });
    return sorted;
  };

  const calculateInvites = async (data) => {
    let copyUsers = data.slice();
    let sum = await copyUsers.reduce(
      (sum, cur) => sum + cur.stats.invited_users_count,
      0
    );
    setTotalUsersInvited(sum);
    setCalculatingInvitedUsers(false);
  };

  const calculateCampaigns = async (data) => {
    let copyUsers = data.slice();
    let sum = await copyUsers.reduce(
      (sum, cur) => sum + cur.stats.published_campaigns_count,
      0
    );
    setTotalPublishedCampaigns(sum);
    setCalculatingPublishedCampaigns(false);
  };

  const calculateMembers = async (data) => {
    let copyUsers = data.slice();
    let teamMembers = await copyUsers.filter((user) => user.style === "member");
    setTeamMemberNos(teamMembers.length);
    setCalculatingTeamMemberNos(false);
  };

  const handleDateSort = () =>{
    if(sortDateNext === "desc"){
      setSortDateNext("asc");
      setUsers(dateSort(users, "asc"));
    }else{
      setSortDateNext("desc");
      setUsers(dateSort(users, "desc"));
    }
  }

  const SortButton = () => (
    <Button color="blue" className="mb-1e" onClick={handleDateSort}>
      Sort by {sortDateNext === "desc" ? "oldest" : "latest"}
    </Button>
  );

  return (
    <div className="Main">
      {users.length >= 0 && !usersLoading ? (
        <div>
          <UserSummary
            last_user={lastUserAddedAt}
            calculatingMembers={calculatingTeamMemberNos}
            membersNos={teamMemberNos}
            invites={totalUsersInvited}
            calculatingInvites={calculatingInvitedUsers}
            campaigns={totalPublishedCampaigns}
            calculatingCampaigns={calculatingPublishedCampaigns}
          />
          <SortButton />
          <Users data={users} />
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default App;
