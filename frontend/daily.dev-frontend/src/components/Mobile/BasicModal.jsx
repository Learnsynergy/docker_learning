import * as React from "react";
import Modal from "@mui/material/Modal";
import AddBar from "./AddBar";
import addFeed from "../../images/iconMenu/addFeed.svg";

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>
        <img
          className="size-10 p-1 border-2 border-white border-opacity-10 rounded-xl bg-[#a8b3cf0d]"
          src={addFeed}
          alt="home"
        />
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddBar />
      </Modal>
    </div>
  );
}
