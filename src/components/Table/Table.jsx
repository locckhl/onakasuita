import React from "react";
import "./index.scss";

export default function Table() {
  return (
    <div>
      <div className="text-center fs-3 mb-3">
        <span>User</span>
      </div>

      {/* table content */}
      <table class="table table-striped table-hover table-bordered admin-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">View</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><a href="user-profile">profile</a></td>
            <td>
              {" "}
              <a >
                <i class="fas fa-trash"></i>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td><a href="user-profile">profile</a></td>
            <td>
              {" "}
              <a >
                <i class="fas fa-trash"></i>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td><a href="user-profile">profile</a></td>
            <td>
              {" "}
              <a >
                <i class="fas fa-trash"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
