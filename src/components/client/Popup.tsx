import React, { useState } from "react";

const Popup = () => {
  const [popups, setPopups] = useState([
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtOkUyljXGqbSyYMtb-CV1jmtNOkxyzMEBuA&s",
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBBNm-MZdiTWWTMnPjitYdPA9BixMw-y2rzacrqrmEyZNo7oE835hJx5FKFotXjNnqJE&usqp=CAU",
    },
    {
      id: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/An%C3%BAncio_na_Av._Nossa_Senhora_de_Copacabana.jpg/1200px-An%C3%BAncio_na_Av._Nossa_Senhora_de_Copacabana.jpg",
    },
  ]);

  const handleClose = (id: number) => {
    setPopups(popups.filter(popup => popup.id !== id));
  };

  return (
    <div className="">
      {popups.map((popup, index) => (
        <div
          key={popup.id}
          className={`fixed inset-0 z-${50 + index} w-12/12 flex items-center justify-center bg-black bg-opacity-50`}
        >
          <div className="bg-white rounded-lg p-5 max-w-sm w-full relative">
            <button
              onClick={() => handleClose(popup.id)}
              className="absolute text-2xl top-0 right-1 text-gray-400 hover:text-gray-600"
            >
              &times;
            </button>
            <img
              src={popup.image}
              alt={`Popup ${popup.id}`}
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Popup;
