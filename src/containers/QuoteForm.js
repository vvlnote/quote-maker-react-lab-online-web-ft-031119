import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content: '',
<<<<<<< HEAD
    author: '',
=======
    author: ''
>>>>>>> f8e88917e1d650d06d376331c7ad89e440911536
  }

  handleOnChange = event => {
    // Handle Updating Component State

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
    event.preventDefault();
    const quote = {...this.state, id: uuid(), votes: 0}
    debugger;
    this.props.addQuote(quote);
    this.setState({
      content: '',
      author:''
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={event => this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
<<<<<<< HEAD
                      <textarea name="content" onChange={event => this.handleOnChange(event)}
=======
                      <textarea name="content"
>>>>>>> f8e88917e1d650d06d376331c7ad89e440911536
                        className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
<<<<<<< HEAD
                      <input name="author" onChange={event => this.handleOnChange(event)}
=======
                      <input name="author"
>>>>>>> f8e88917e1d650d06d376331c7ad89e440911536
                        className="form-control"
                        type="text"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
                {this.state.author}
                {this.state.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect(null, {addQuote})(QuoteForm);
