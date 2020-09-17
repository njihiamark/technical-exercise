import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

const Users = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://d1ts43dypk8bqh.cloudfront.net/v1/avatars/eb38d065-c587-402f-aa17-135c754db73a"
        />
        <Card.Header>Aaron Cody</Card.Header>
        <Card.Meta color="black">Owner</Card.Meta>
        <Card.Description>
          <span><strong>Invited users:</strong> 3</span>&nbsp;&nbsp;
          <span><strong>Published campaigns:</strong> 0</span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>aaron@trychameleon.com</Card.Content>
    </Card>
  </Card.Group>
);

export default Users;
