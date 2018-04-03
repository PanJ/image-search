import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export default ({ photo }) => (
  <Card
    style={{ width: 240 }}
    cover={<img alt={`photo by ${photo.user.name}`} src={photo.urls.small} />}
  >
    <Meta title={`by ${photo.user.name}`} description={photo.user.location} />
  </Card>
);
