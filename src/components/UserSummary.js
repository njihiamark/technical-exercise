import React from 'react'
import { Statistic } from 'semantic-ui-react'

const UserSummary = () => (
  <div>
    <Statistic.Group size={"tiny"}>
      <Statistic>
        <Statistic.Value>22</Statistic.Value>
        <Statistic.Label>Members</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>User</Statistic.Value>
        <Statistic.Label>Latest</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>22</Statistic.Value>
        <Statistic.Label>Invites</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>22</Statistic.Value>
        <Statistic.Label>Campaigns</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  </div>
);

export default UserSummary;