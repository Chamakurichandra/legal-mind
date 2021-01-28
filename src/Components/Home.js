import React, { Component } from 'react'
import Header from "./Header";
export default class Home extends Component {
    render() {
        return (
            <div>
              <Header/>
              <div className="card">
                  <p>My Tasks</p>
                  <div className="row">
                    <div className="col-3">
                    <div className="add">+</div>
                    </div>
                    <div className="col">
                    <div>Add a task</div>
                    </div>
                  </div>
                  <div style={{margin:"1em 0"}}>
                  <div className="row">
                    <div className="col-3">
                    <div className="round"></div>
                    </div>
                    <div className="col">
                    <div data-toggle="modal" data-target="#myModal" style={{cursor:"pointer"}}>Campus build</div>
<div id="myModal" className="modal fade" role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div className="modal-body">
          <p>Campus build</p>
      <textarea rows="4" cols="50"></textarea>
      <p>Add date</p>
      <p>Move to another list</p>
      </div>
      <div className="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
 <div className="col-2">
 <div><i className="fa fa-pencil"></i></div>
  </div>
  </div>
  </div>
  </div>
 </div>
  )
 }
}
