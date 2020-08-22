import React, { Component } from "react";
import { PropTypes } from "prop-types";

class BodyView extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    schedulerData: PropTypes.object.isRequired,
  };

  render() {
    const { schedulerData } = this.props;
    const { renderData, headers, config, behaviors } = schedulerData;
    let cellWidth = schedulerData.getContentCellWidth();

    let tableRows = renderData.map((item) => {
      let rowCells = headers.map((header, index) => {
        let key = item.slotId + "_" + header.time;
        let style = index === headers.length - 1 ? {} : { width: cellWidth };
        if (!!header.nonWorkingTime)
          style = {
            ...style,
            backgroundColor: config.nonWorkingTimeBodyBgColor,
          };
        if (!!behaviors.getNonAgendaViewBodyCellBgColorFunc) {
          let cellBgColor = behaviors.getNonAgendaViewBodyCellBgColorFunc(
            schedulerData,
            item.slotId,
            header
          );
          if (!!cellBgColor) style = { ...style, backgroundColor: cellBgColor };
        }
        return (
          <div key={key} style={style}>
            <div></div>
          </div>
        );
      });

      return (
        <div key={item.slotId} style={{ height: item.rowHeight }}>
          {rowCells}
        </div>
      );
    });

    return <div>{tableRows}</div>;
  }
}

export default BodyView;
