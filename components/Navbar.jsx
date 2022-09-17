import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <main>
      <div>
        <nav className="nav">
          <span className="nav-text">Resume</span>
          <div className="nav-link">
            <Link href="/">
              <div>Home</div>
            </Link>
          </div>
          <div className="nav-link">
            <Link href="/experience">
              <div>Experience</div>
            </Link>
          </div>
          <div className="nav-link">
            <Link href="/contact">
              <div>Contact</div>
            </Link>
          </div>
          <div className="nav-link">
            <Link href="/lab-07">
              <div>TodoList</div>
            </Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
