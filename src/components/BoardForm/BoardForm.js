import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

import './BoardForm.scss';

class BoardForm extends React.Component {
  state = {
    boardName: '',
    boardDescription: '',
    saveNewBoard: PropTypes.func.isRequired,
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ boardName: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ boardDescription: e.target.value });
  }

  saveBoard = (e) => {
    e.preventDefault();
    const { boardName, boardDescription } = this.state;
    const { saveNewBoard } = this.props;
    const newBoard = {
      description: boardDescription,
      name: boardName,
      uid: authData.getUid(),
    };
    saveNewBoard(newBoard);
  }

  render() {
    const { boardName, boardDescription } = this.state;
    return (
      <div className="BoardForm m-3">
        <form className="col-6 offset-3 bg-light p-3">
           <div className="form-group">
            <label htmlFor="board-name">Email address</label>
            <input
            type="text"
            className="form-control"
            id="board-name"
            placeholder="Name your board"
            value={boardName}
            onChange={this.nameChange}/>
          </div>
           <div className="form-group">
            <label htmlFor="board-description">Password</label>
            <input
            type="text"
            className="form-control"
            id="board-description"
            placeholder="Describe your board"
            value={boardDescription}
            onChange={this.descriptionChange}/>
         </div>
          <button className="btn btn-dark" onClick={this.saveBoard}>Save Board</button>
        </form>
      </div>
    );
  }
}

export default BoardForm;
