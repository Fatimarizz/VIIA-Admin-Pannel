import React from 'react';

const DeleteItemModal = ({ modalVisible,  handleDeleteItem, item ,closeModal }) => {

  return (
    modalVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Are you sure you want to delete this {item}?</h2>
       

        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="py-2 px-4 bg-gray-300 rounded-md mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteItem}
            className="py-2 px-4 bg-red-500 text-white rounded-md"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
    )
  );
};

export default DeleteItemModal;
