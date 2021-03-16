import React, { Fragment, Component } from "react";

import History from "./History";

class HistoryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFilter: false
    };
  }

  onPressFilter = () => {
    this.setState({ showFilter: !this.state.showFilter });
  };

  render() {
    return (
      <Fragment>
        <History
          onPressFilter={this.onPressFilter}
          showFilter={this.state.showFilter}
        />
      </Fragment>
    );
  }
}

export default HistoryContainer;
