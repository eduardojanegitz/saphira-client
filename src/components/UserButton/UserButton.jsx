import React, { useState } from "react";
import "./UserButton.css";

const UserButton = () => {
  const [open, setOpen] = useState(false);

  // TEMP
  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <img src="/general/noAvatar.png" alt="avatar image" />
      <img
        onClick={() => setOpen((prev) => !prev)}
        src="/general/arrow.svg"
        alt="arrow image"
        className="arrow"
      />
      {open && (
        <div className="userOptions">
          <div className="userOption">Perfil</div>
          <div className="userOption">Configurações</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / Registre-se
    </a>
  );
};

export default UserButton;
