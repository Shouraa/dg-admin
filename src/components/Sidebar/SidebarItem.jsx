/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
// import { InboxIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

const useStyles = makeStyles((theme) =>
  createStyles({
    link: {
      textDecoration: 'none',
      '&:hover, &:focus': {
        backgroundColor: theme.palette.background.light,
      },
    },
    externalLink: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none',
    },
    linkActive: {
      backgroundColor: theme.palette.background.light,
    },
    linkNested: {
      paddingLeft: 0,
      '&:hover, &:focus': {
        backgroundColor: '#FFFFFF',
      },
    },
    linkIcon: {
      marginRight: theme.spacing(1),
      color: `${theme.palette.text.secondary}99`,
      transition: theme.transitions.create('color'),
      width: 24,
      display: 'flex',
      justifyContent: 'center',
    },
    linkIconActive: {
      color: theme.palette.primary.main,
    },
    linkText: {
      padding: 0,
      color: `${theme.palette.text.secondary}CC`,
      transition: theme.transitions.create(['opacity', 'color']),
      fontSize: 16,
    },
    linkTextActive: {
      color: theme.palette.text.primary,
    },
    linkTextHidden: {
      opacity: 0,
    },
    nestedList: {
      paddingLeft: theme.spacing(2) + 30,
    },
    sectionTitle: {
      marginLeft: theme.spacing(4.5),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
      height: 1,
      backgroundColor: '#D8D8D880',
    },
  })
);

const SidebarItem = ({
  link,
  icon,
  label,
  children,
  isSidebarOpened,
  nested,
  type,
}) => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);
  const isLinkActive =
    link &&
    (location.pathname === link || location.pathname.indexOf(link) !== -1);

  const toggleCollapse = (event) => {
    if (isSidebarOpened) {
      event.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  console.log(isLinkActive);

  if (!children)
    return (
      <div>
        <ListItem
          button
          component={link && Link}
          to={link}
          className={classes.link}
          classes={{
            root: clsx(classes.linkRoot, {
              [classes.linkActive]: isLinkActive && !nested,
              [classes.linkNested]: nested,
            }),
          }}
          disableRipple
        >
          <ListItemIcon
            className={clsx(classes.linkIcon, {
              [classes.linkIconActive]: isLinkActive,
            })}
          >
            {icon}
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: clsx(classes.linkText, {
                [classes.linkTextActive]: isLinkActive,
                [classes.linkTextHidden]: !isSidebarOpened,
              }),
            }}
            primary={label}
          />
        </ListItem>
      </div>
    );

  return (
    <div>
      <ListItem
        button
        component={link && Link}
        onClick={toggleCollapse}
        className={classes.link}
        to={link}
        disableRipple
      >
        <ListItemIcon
          className={clsx(classes.linkIcon, {
            [classes.linkIconActive]: isLinkActive,
          })}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: clsx(classes.linkText, {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !isSidebarOpened,
            }),
          }}
          primary={label}
        />
      </ListItem>
      {children && (
        <Collapse
          in={isOpen && isSidebarOpened}
          timeout="auto"
          unmountOnExit
          className={classes.nestedList}
        >
          <List component="div" disablePadding>
            {children.map((childrenLink) => (
              <SidebarItem
                key={childrenLink && childrenLink.link}
                location={location}
                isSidebarOpened={isSidebarOpened}
                classes={classes}
                nested
                {...childrenLink}
              />
            ))}
          </List>
        </Collapse>
      )}
    </div>
  );
};

export default SidebarItem;
