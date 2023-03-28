import React from 'react';
import Button from 'component-app/Button';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Button type="primary" />
        <Button type="warning" />
      </div>
    );
  }
}
