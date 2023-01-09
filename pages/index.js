import { useState } from 'react';
import Modal from '../components/Modal';

export default function ModalCreen() {
  const [showModal, setShowModal] = useState();
  return (
    <div className="flex justify-center items-center ">
      <h2>Modal</h2>
      <button className="primary-button" onClick={() => setShowModal(true)}>
        Mod
      </button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className="bg-slate-200">asgdbygidsihsd</div>
      </Modal>
    </div>
  );
}
