import * as React from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends React.PureComponent {
  render() {
    const {onPlayButtonClick, isLoading, isPlaying, children} = this.props;

    return (
      <React.Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={() => onPlayButtonClick()}
        />
        <div className="track__status">
          {children}
        </div>
      </React.Fragment>
    );
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default AudioPlayer;
