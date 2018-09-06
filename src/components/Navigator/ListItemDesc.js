import React from 'react';
import { object } from 'prop-types';
import injectSheet from 'react-jss';
import Moment from 'react-moment';

import StarIcon from '@material-ui/icons/Star';
import StyleIcon from '@material-ui/icons/Style';

const styles = theme => ({
  listItemCategory: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '16px',
    '& span': {
      color: `${theme.navigator.colors.postsListItemCategory}`,
      fontSize: `${theme.navigator.sizes.postsListCategoryFont}em`,
      fontFamily: `${theme.navigator.fonts.postsListFootInfoFontFamily}`,
      fontWeight: 400
    },
    '& svg': {
      color: `${theme.navigator.colors.postsFootInfoIcon}`,
      fontSize: `${theme.navigator.sizes.postsListCategoryFont}em`,
      marginRight: '8px'
    }
  },
  listItemFootInfo: {
    display: 'flex',
    marginTop: '8px',
    alignItems: 'center',
    '& span': {
      color: `${theme.navigator.colors.postsFootInfo}`,
      fontSize: `${theme.navigator.sizes.postsListFootInfoFont}em`,
      fontFamily: `${theme.navigator.fonts.postsListFootInfoFontFamily}`,
      fontWeight: 400,
      [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
        fontSize: `${theme.navigator.sizes.postsListFootInfoFont}em`,
        '.moving-featured &, .is-aside &': {
          fontSize: '0.7em',
          fontWeight: 400
        }
      }
    },
    '& svg': {
      color: `${theme.navigator.colors.postsFootInfoIcon}`,
      fontSize: `${theme.navigator.sizes.postsListFootInfoIconFont}em`,
      margin: '0 8px'
    }
  }
});

const ListItemDesc = props => {
  const { classes, post } = props;

  return (
    <div>
      {post.node.frontmatter.category && (
        <div className={classes.listItemCategory}>
          <StyleIcon />
          <span>{post.node.frontmatter.category}</span>
        </div>
      )}
      <div className={classes.listItemFootInfo}>
        <span>
          <Moment format="D MMM YYYY">{post.node.fields.prefix}</Moment>
        </span>
        <StarIcon />
        <span>{post.node.timeToRead} min read</span>
      </div>
    </div>
  );
};

ListItemDesc.propTypes = {
  classes: object.isRequired,
  post: object.isRequired
};

export default injectSheet(styles)(ListItemDesc);
