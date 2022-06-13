import react from "react";

function Header({title, views, date}) {
    return (
        <div id='header'>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {date}</p>
        </div>
    );
}

export default Header;