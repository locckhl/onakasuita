import React, { useEffect, useState } from "react";
import "./index.scss";
import { getAllUser, deleteUser, blockUser, unBlockUser } from "../../lib/api/user"
import { getReviews } from "../../lib/api/reviews"
import { getComments } from "../../lib/api/comment"

export default function Table(props) {
  const [ listUser, setListUser ]= useState([])
  const [ listReview, setListReview ]= useState([])
  const [ listComment, setListComment ]= useState([])
  let userR
  useEffect(async() => {
    let follow = await getAllUser() || [];
    setListUser(follow)
    follow = await getReviews() || [];
    setListReview(follow)
    follow = await getComments() || [];
    setListComment(follow)
  }, [listUser.length])
  let divRender = (
	  <div>

	  </div>
  );
	if (props.type == 'users') {
	divRender = (
		<div>
			<div className="text-center fs-3 mb-3">
			<span>User Table</span>
			</div>
	
			{/* table content */}
			<table class="table table-striped table-hover table-bordered admin-table">
			<thead>
				<tr>
				<th scope="col">#</th>
				<th scope="col">UserName</th>
				<th scope="col">Phone</th>
				<th scope="col">View Profile</th>
				<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody>
				{ listUser.map((value, index) => {
				let link =`user-profile/${value.id}`
				return (
				<tr>
					<th scope="row">{index + 1}</th>
					<td>{value.username}</td>
					<td>{value.phone}</td>
					<td><a href={link}><i class="fas fa-eye"></i></a></td>
					<td>
					<a class="text-center">
						{value.block ? (
						<i class="fas fa-play-circle" onClick={()=>blockUser(value.id)}> </i>
						) : (
						<i class="fas fa-stop-circle" onClick={()=>unBlockUser(value.id)}> </i>
						)}
					</a>
					</td>
				</tr>)
				})}
			</tbody>
			</table>
	  	</div>
	)
  } else if (props.type == 'review') {
	divRender = (
		<div>
			<div className="text-center fs-3 mb-3">
			<span>Reivew Table</span>
			</div>
	
			{/* table content */}
			<table class="table table-striped table-hover table-bordered admin-table">
			<thead>
				<tr>
				<th scope="col">#</th>
				<th scope="col">Title</th>
				<th scope="col">Content</th>
				<th scope="col">Reviewer</th>
				<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody>
				{listReview.map((value, index)=>{
        let userReview = listUser.find(user=>user.id===value.userId);
				let link =`user-profile/${value.id}`
				return (
				<tr>
					<th scope="row">{index + 1}</th>
					<td>{value.title}</td>
					<td style={{maxWidth: "450px"}}>{value.content}</td>
					<td><a href={link}>{userReview && userReview.username}</a></td>
					<td>

					</td>
				</tr>)
				})}
			</tbody>
			</table>
	  	</div>
	);
	} else if (props.type == 'comment') {
		divRender = (
			<div>
				<div className="text-center fs-3 mb-3">
				<span>Comment Table</span>
				</div>
		
				{/* table content */}
				<table class="table table-striped table-hover table-bordered admin-table">
				<thead>
					<tr>
					<th scope="col">#</th>
					<th scope="col">Review Title</th>
					<th scope="col">Content</th>
					<th scope="col">User</th>
					<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{listComment.map( (value, index)=>{
					let userReview = listUser.find(user=>user.id===value.userId);
          let reviewTitle = listReview.find(review1=>review1.id===value.reviewId);
					return (
					<tr>
						<th scope="row">{index + 1}</th>
						<td>{reviewTitle && reviewTitle.title}</td>
						<td>{value.content}</td>
						<td>{userReview && userReview.username}</td>
						<td>
						<a class="text-center">
						</a>
						</td>
					</tr>)
					})}
				</tbody>
				</table>
			</div>
		);
	}
  console.log(listReview);
  return (
    divRender
  );
}
