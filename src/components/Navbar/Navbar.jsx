import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
    <div className="container w-container">
      <Link to="/"  className="brand w-nav-brand"><img src="../../../src/assets/images/1.png" loading="lazy" width="150" sizes="150px"  alt="" className="image-13"/></Link>
      <nav role="navigation" className="nav-menu w-nav-menu">
        <div data-hover="false" data-delay="0" className="w-dropdown">
          <div className="w-dropdown-toggle">
            <div className="w-icon-dropdown-toggle"></div>
            <div className="nav-link">Edit</div>
          </div>
          <nav className="dropdown-list w-dropdown-list">
            <Link to="/edit-pdf" className="dropdown-link-2 w-dropdown-link">Edit a PDF</Link>
            <Link to="/merge-pdf"  className="dropdown-link-2 w-dropdown-link">Merge PDF file</Link>
            <Link to="/split-pdf" href="split-pdf.html" className="dropdown-link-2 w-dropdown-link">Split a PDF</Link>
            <Link to="/compress-pdf" href="compress-pdf.html" className="dropdown-link-2 w-dropdown-link">Compress a PDF</Link>
            <Link to="/rotate-pdf"  className="dropdown-link-2 w-dropdown-link">Rotate a PDF</Link>
          </nav>
        </div>
        <div data-hover="false" data-delay="0" className="nav-link w-dropdown">
          <div className="w-dropdown-toggle">
            <div className="w-icon-dropdown-toggle"></div>
            <div>Convert</div>
          </div>
          <nav className="dropdown-list-2 w-dropdown-list">
            <div className="w-row">
              <div className="w-col w-col-6">
                <Link to="/word-to-pdf"  className="dropdown-link-2 w-dropdown-link">Convert Word to PDF</Link>
                <a href="convert-powerpoint-to-pdf.html" className="dropdown-link-2 w-dropdown-link">Convert PowerPoint to PDF</a>
                <a href="convert-excel-to-pdf.html" className="dropdown-link-2 w-dropdown-link">convert Excel to PDF</a>
                <a href="convert-jpg-images-to-pdf.html" className="dropdown-link-2 w-dropdown-link">convert JPG to PDF</a>
                <a href="convert-png-images-to-pdf.html" className="dropdown-link-2 w-dropdown-link">convert PNG to PDF</a>
              </div>
              <div className="w-col w-col-6">
                <a href="convert-pdf-to-word.html" className="dropdown-link-2 w-dropdown-link">Convert PDF to Word</a>
                <a href="convert-pdf-to-powerpoint.html" className="dropdown-link-2 w-dropdown-link">Convert PDF to PowerPoint</a>
                <a href="convert-pdf-to-microsoft-excel.html" className="dropdown-link-2 w-dropdown-link">Convert PDF to Excel</a>
                <a href="convert-pdf-to-jpg.html" className="dropdown-link-2 w-dropdown-link">Convert PDF to JPG</a>
                <a href="convert-pdf-to-png.html" className="dropdown-link-2 w-dropdown-link">Convert PDF to PNG</a>
              </div>
            </div>
          </nav>
        </div>
        <div data-hover="false" data-delay="0" className="w-dropdown">
          <div className="w-dropdown-toggle">
            <div className="w-icon-dropdown-toggle"></div>
            <div className="nav-link">Manage</div>
          </div>
          <nav className="dropdown-list-3 w-dropdown-list">
            <Link to="lock-protect"  className="dropdown-link-2 w-dropdown-link">Protect/Encrypt a PDF file</Link>
            <Link to="unlock"  className="dropdown-link-2 w-dropdown-link">Unlock a protected PDF file</Link>
            <Link to="sign-a-pdf"   className="dropdown-link-2 w-dropdown-link">Sign a PDF</Link>
          </nav>
        </div>
      </nav>
      <div className="w-nav-button">
        <div className="w-icon-nav-menu"></div>
      </div>
    </div>
  </div>
  )
}

export default Navbar