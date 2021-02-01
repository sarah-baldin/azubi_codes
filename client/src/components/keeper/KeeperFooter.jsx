import React from "react";

function KeeperFooter(props) {
  const year = new Date().getFullYear();
  return (
    <footer className="keeper-footer">
      <p>
        <a href="/">Zurück zur Homepage</a> 
        <button id="deleteUser" onClick={props.onDelete}>{props.deleteAccLink}</button> 
        <a href="/datenschutz" className="siteFooter-content">Datenschutz</a>
      </p>
      <p>Copyright by Sarah Baldin ⓒ {year}</p>
    </footer>
  );
}

export default KeeperFooter;
