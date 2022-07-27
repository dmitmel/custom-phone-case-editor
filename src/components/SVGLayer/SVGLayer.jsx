import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import Layer from '../Layer';

class SVGLayer extends React.Component {
  static propTypes = {
    imageWidth: PropTypes.number.isRequired,
    imageHeight: PropTypes.number.isRequired,
    imageX: PropTypes.number.isRequired,
    imageY: PropTypes.number.isRequired,
    imageRotation: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string,
  };

  state = { layerWidth: 0, layerHeight: 0 };

  componentDidMount() {
    this.layer = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node
    this.setLayerSize();
  }

  setLayerSize = () => {
    const { width, height } = this.layer.getBoundingClientRect();
    this.setState({ layerWidth: width, layerHeight: height });
  };

  render() {
    const {
      imageWidth: iw,
      imageHeight: ih,
      imageX: ix,
      imageY: iy,
      imageRotation: ir,
      backgroundColor,
      children,
    } = this.props;

    const { layerWidth: lw, layerHeight: lh } = this.state;

    return (
      <EventListener target="window" onResize={this.setLayerSize}>
        <Layer component="svg">
          {backgroundColor && (
            <rect x={0} y={0} width={lw} height={lh} fill={backgroundColor} />
          )}

          <g transform={`translate(${lw / 2},${lh / 2})`}>
            <g
              transform={[
                `translate(${ix - iw / 2},${iy - ih / 2})`,
                `rotate(${ir})`,
              ].join(' ')}
              style={{ transformOrigin: `${iw / 2}px ${ih / 2}px` }}>
              {children}
            </g>
          </g>
        </Layer>
      </EventListener>
    );
  }
}

export default SVGLayer;
