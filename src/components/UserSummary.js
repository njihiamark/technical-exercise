import React from "react";
import { Statistic } from "semantic-ui-react";

const UserSummary = ({ last_user, calculatingMembers, membersNos, calculatingInvites, invites, campaigns, calculatingCampaigns }) => (
  <div className="mb-1e">
    <Statistic.Group size={"tiny"}>
      <Statistic>
        <Statistic.Value>
          {calculatingMembers ? <span>calculating...</span> : membersNos}
        </Statistic.Value>
        <Statistic.Label>Members</Statistic.Label>
      </Statistic>
      {last_user && (
        <Statistic>
          <Statistic.Value>{last_user}</Statistic.Value>
          <Statistic.Label>Latest</Statistic.Label>
        </Statistic>
      )}
      <Statistic>
        <Statistic.Value>
          {calculatingInvites ? <span>calculating...</span> : invites}
        </Statistic.Value>
        <Statistic.Label>Invites</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{calculatingCampaigns ? <span>calculating...</span> : campaigns}</Statistic.Value>
        <Statistic.Label>Campaigns</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  </div>
);

export default UserSummary;
