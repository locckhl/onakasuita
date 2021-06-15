import React, { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { updateUser, uploadImage } from "../../lib/api/user";
import "./index.scss";

export default function UserEdit({ user }) {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [avatar, setAvatar] = useState(user.avatar);
  const avatarInput = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdate = async () => {
    console.log("id", avatarInput.current.files[0]);

    try {
      if (
        avatarInput.current.files[0] !== null &&
        avatarInput.current.files[0] !== undefined
      ) {
        const downloadURL = await uploadImage(avatarInput.current.files[0]);
        const userRes = await updateUser({
          id: user.id,
          avatar: downloadURL,
          phone,
          username,
        });
        alert("更新完了");
        window.location.reload(true);
      } else {
        const userRes = await updateUser({
          id: user.id,
          avatar: null,
          phone,
          username,
        });
        alert("更新完了");
        window.location.reload(true);
      }
    } catch (error) {
      alert("申し訳ございません、エラーが発生した");
      console.log(error);
    }
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              名
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="User Name"
              aria-label="username"
              aria-describedby="basic-addon1"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              aria-label="email"
              aria-describedby="basic-addon1"
              disabled
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              📱
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Phone"
              aria-label="phone"
              aria-describedby="basic-addon1"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>

          <label for="avatar_image" class="custom-file-upload btn btn-primary">
            <i class="fa fa-cloud-upload"></i> Upload avatar
          </label>
          <input type="file" id="avatar_image" ref={avatarInput} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
