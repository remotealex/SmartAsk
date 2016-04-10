import React from 'react';

import BuildExportData from 'helpers/BuildExportData';
import JSONToCSVConvertor from 'helpers/JSONToCSVConvertor';

export default class ExportButton extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired
  };

  exportCSV = (event) => {
    event.preventDefault();
    const exportData = BuildExportData(this.props.data);
    JSONToCSVConvertor(exportData, 'Meetup Export', true);
  }

  render() {
    if (this.props.data.length === 0) {
      return <span></span>;
    }

    return (
      <a href="#"
         className="button mod-red"
         onClick={this.exportCSV}>
        Export as Speadsheet
      </a>
    );
  }
}
