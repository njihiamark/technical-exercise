import React from "react";
import { Card, Image } from "semantic-ui-react";

const Users = ({ data }) => (
  <Card.Group>
    {data.map((user) => (
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
    ))}
  </Card.Group>
);

export default Users;
