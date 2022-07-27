import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';

const styles = ({ spacing }) => ({
  button: {
    marginBottom: spacing.unit,
  },
  filename: {
    marginBottom: spacing.unit * 3,
  },
  input: {
    display: 'none',
  },
});

class UploadImage extends React.Component {
  static propTypes = {
    filename: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };

  onChange = ({ target }) => {
    const [file] = target.files;
    const { onChange } = this.props;

    if (file == null) return;

    const image = new Image();
    image.src = URL.createObjectURL(file);

    image.onload = () =>
      onChange(file.name, image.src, image.width, image.height);

    image.onerror = event => console.error(event.error);
  };

  render() {
    const { filename, classes } = this.props;

    return (
      <>
        <Button
          variant="raised"
          color="primary"
          className={classes.button}
          onClick={() => this.input.click()}>
          Upload Image
        </Button>

        <Typography className={classes.filename}>
          {filename || <br />}
        </Typography>

        <input
          type="file"
          accept="image/*"
          className={classes.input}
          onChange={this.onChange}
          ref={input => {
            this.input = input;
          }}
        />
      </>
    );
  }
}

export default withStyles(styles)(UploadImage);
