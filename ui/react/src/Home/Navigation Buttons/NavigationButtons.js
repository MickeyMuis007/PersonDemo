import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { LinkContainer } from 'react-router-bootstrap';

const images = [
  {
    url: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
    title: 'People',
    width: '40%',
    link: '/people'
  },
  {
    url: 'https://www.cutebabyblog.com/wp-content/uploads/2018/08/cute-baby-boy-images-48-1024x683.jpg',
    title: 'Add Person',
    width: '30%',
    link: '/add-person'
  },
  {
    url: 'https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg',
    title: 'Bootstrap Demo',
    width: '30%',
    link: '/bootstrap-demo'
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/03/12/18/00/kerala-4051412__340.jpg',
    title: 'Material Button Demo',
    width: '30%',
    link: '/material-button-demo'
  },
  {
    url: 'https://atgbcentral.com/data/out/185/5614863-images.jpg',
    title: 'Material Drawer Demo',
    width: '30%',
    link: '/material-drawer-demo'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9Timy2N5Pnzi3aa1_Y5cs4gaxp1K_6hZBbtS0C5suvIfYQWafQ',
    title: 'Material Checkbox Demo',
    width: '30%',
    link: '/material-checkbox-demo'
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

function NavigationButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        ><LinkContainer to={image.link}><span>
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>

            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </span></LinkContainer>
        </ButtonBase>
      ))}
    </div>
  );
}

export default NavigationButtons;
