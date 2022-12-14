import React from 'react';
import { Alert, Collapse } from 'react-bootstrap';

export default class Toast extends React.Component {
  componentDidUpdate() {
    const { showing, onDismiss } = this.props;
    if (showing) {
      clearTimeout(this.dismessTimer);
      this.dismessTimer = setTimeout(onDismiss, 5000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.dismessTimer);
  }

  render() {
    const {
      showing, bsStyle, onDismiss, children,
    } = this.props;
    return (
      <Collapse in={showing}>
        <div style={{
          position: 'fixed', bottom: 20, left: 20, zIndex: 10,
        }}
        >
          <Alert bsStyle={bsStyle} onDismiss={onDismiss}>
            {children}
          </Alert>
        </div>
      </Collapse>
    );
  }
}
