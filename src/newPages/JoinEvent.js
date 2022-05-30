






import React, { useState } from "react";
import "../Pages/modal.css"

function JoinEvent() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div className="App">
            {isOpen && (
                <>
                    <div className="overlay"></div>
                    <div className="modal">
                        <header className="modal__header">
                            <h2>Modal Title</h2>
                            <button onClick={closeModal} className="close-button">&times;</button>
                        </header>
                        <main className="modal__main">
                            <p>Some content here!</p>
                        </main>
                    </div>
                </>
            )}

            <h2>Just Some Dummy Text</h2>
            <button className="button" onClick={openModal}>Open Modal</button>
        </div>
    );
}

export default JoinEvent;


