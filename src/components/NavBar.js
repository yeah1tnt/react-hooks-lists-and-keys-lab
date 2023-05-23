import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const temp = links.map(function (links) {
    return <a key={links} href={"#"+ links}>{links}</a>
  })
  return <nav>{temp}</nav>;
}

export default NavBar;
