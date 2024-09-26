import React from 'react';

const Data = [
    { id: 1, name: "Aftab" },
    { id: 2, name: "Shoyab" },
    { id: 3, name: "Mahir" },
    { id: 4, name: "Arshad" },
    { id: 5, name: "Masoud" },
    { id: 6, name: "Irshad" },
    { id: 7, name: "Alfez" }
];

export default function Loopapp() {
    return (
        <div>
            {Data.filter((item, key) => key < 19).map((filteredItem) => {
                return (
                    <div key={filteredItem.id} style={{ width: "20%", height: "auto", float: "left", margin: "15px", padding: "25px", backgroundColor: "aqua" }}>
                        <p>{filteredItem.id}</p>
                        <p>{filteredItem.name}</p>
                    </div>
                );
            })}
        </div>
    );
}
