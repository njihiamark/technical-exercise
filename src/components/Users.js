import React from "react";
import { Card, Image } from "semantic-ui-react";

//I used cards instead of tables because
//I will not have to create multiple layouts for responsive
const Users = ({ data }) => (
  <Card.Group>
    {data.length > 0 ? (
      data.map((user) => (
        <Card key={user.id}>
          <Card.Content>
            <Image floated="right" size="mini" src={user.cached_avatar} />
            <Card.Header>{user.name}</Card.Header>
            <Card.Meta>{user.style}</Card.Meta>
            <Card.Meta>
              Created at:&nbsp;
              {user.created_at}
            </Card.Meta>
            <Card.Description>
              <span>
                <strong>Invited users:</strong> {user.stats.invited_users_count}
              </span>
              &nbsp;&nbsp;
              <span>
                <strong>Published campaigns: </strong>
                {user.stats.published_campaigns_count || 0}
              </span>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>{user.email}</Card.Content>
        </Card>
      ))
    ) : (
      <p>No data available</p>
    )}
  </Card.Group>
);

export default Users;
