import React, { Fragment, Component } from "react";

class ExampleComponent extends Component {
  _hasUnmounted = false;
  _response = null;

  state = {
    externalData: null
  };

  constructor(props) {
    super(props);

    // Start an eager fetch.
    this._response = this.asyncLoadData(this.props.id);
  }

  asyncLoadData = id => {
    const task = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(`starting to fetch... id=${id}`);

    return task;
  };

  async componentDidMount() {
    const externalData = await (await this._response).json();
    if (!this._hasUnmounted) {
      console.log(`Setting externalData = ${externalData.id}`);

      this.setState({ externalData });
    }
  }

  componentWillUnmount() {
    this._hasUnmounted = true;
  }

  render() {
    if (this.state.externalData === null)
      return <Fragment>Loading...</Fragment>;

    const { id, userId, title, body } = this.state.externalData;
    return (
      <Fragment>
        <p>
          id: {id} for userId: {userId}
        </p>
        <h2>{title}</h2>
        <p>{body}</p>
        <hr />
      </Fragment>
    );
  }
}

export default ExampleComponent;
