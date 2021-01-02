import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "../Link";

export default function MenuItem({
  title,
  selected = false,
  value,
  icon = null,
}) {
  const IconComponent = icon ? icon : null;

  return (
    <Link href={`/${value}`}>
      <ListItem button selected={selected}>
        <ListItemIcon>{IconComponent ? <IconComponent /> : null}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </Link>
  );
}
