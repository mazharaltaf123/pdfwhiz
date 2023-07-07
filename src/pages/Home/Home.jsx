import React, { useRef, useState } from 'react'
// loading="lazy" width="150" sizes="150px" 

function Home() {
    const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    console.log(file)
    // Handle the selected file here
  };

  return (
    <div>
    <section className="section wf-section">
    <div className="w-layout-blockcontainer container w-container">
      <div className="grid2">
        <div id="w-node-_9c4b4291-8684-58a6-1f6a-e3152eef4bfb-bcc598fb" className="grid2-item">
          <h1 className="heading-6">The simple way to manage and modify your PDF files</h1>
          <h2 className="heading-27"><strong className="bold-text-3">Convert, Edit, Compress. Manage your PDF files the smart way, with PDF Whiz.</strong></h2>
          <ul role="list" className="list">
            <li className="list3">Edit the content of your PDF quickly</li>
            <li className="list3">Keep the layout of your PDF</li>
            <li className="list3">Quickly sign your PDF</li>
          </ul>
        </div>
        <div id="w-node-_6eb18e6d-8b8e-1872-5522-f1f50cb8598a-bcc598fb" className="grid2-item pdf-filer">
          <img src='../../../src/assets/images/manage.png' style={{width:"152px"}}/>
            <h1>Drop Your PDF File</h1>
            <h1 classNameName=''>Or</h1>
            <div style={{width:"100%"}}>
            <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />
      <button className='upload-button' onClick={handleButtonClick}>Upload Your File here</button>
		</div>
        </div>
      </div>
    </div>
  </section>
  <section className="section wf-section">
    <div className="w-layout-blockcontainer container w-container">
      <h1 className="heading-8">The PDF tool for every need</h1>
      <p className="paragraph-4">Discover all of our online PDF tools for converting, modifying, editing, signing and even protecting your files.</p>
      <div className="div-block">
        <img src="../../../src/assets/images/image2-p-500.png" loading="lazy" 
        alt="" 
         className="image-5"/>
         </div>
    </div>
  </section>
  <section className="section wf-section">
    <div className="w-layout-blockcontainer container w-container">
      <div className="grid3">
        <div id="w-node-_75f4b2c9-5909-4277-afef-30be620dab16-bcc598fb" className="div-block-2"><img src="../../../src/assets/images/pdf-to-word.webp" loading="lazy" alt="" className="image-3"/>
          <div className="div-block-3">
            <h2 className="heading-12">Convert to Word</h2>
            <p className="paragraph-small">Convert your PDFs to Microsoft Word files</p>
          </div>
        </div>
        <div id="w-node-b56043b2-71b8-def0-0aba-2e954cac26a0-bcc598fb" className="div-block-2"><img src="../../../src/assets/images/pdf-to-ppt.webp" loading="lazy" alt="" className="image-3"/>
          <div className="div-block-3">
            <h2 className="heading-10">Convert to Powerpoint</h2>
            <p className="paragraph-small">Convert your PDFs to Microsoft Powerpoint files</p>
          </div>
        </div>
        <div id="w-node-_34d3b9e6-7353-e5ba-2ad4-f38c4b1fa940-bcc598fb" className="div-block-2"><img src="../../../src/assets/images/pdf-to-jpg.webp" loading="lazy" alt="" className="image-3"/>
          <div className="div-block-3">
            <h2 className="heading-11">Convert to JPG</h2>
            <p className="paragraph-small">Convert your PDFs to JPG format</p>
          </div>
        </div>
        <div id="w-node-_536932a3-a303-8124-588d-9dfbacb827e5-bcc598fb" className="div-block-2"><img src="../../../src/assets/images/pdf-to-png.webp" loading="lazy" alt="" className="image-3"/>
          <div className="div-block-3">
            <h2 className="heading-13">Convert to PNG</h2>
            <p className="paragraph-small">Convert your PDFs to PNG format</p>
          </div>
        </div>
        <div id="w-node-cefc2388-77f3-4e05-8a6d-033ddfb6f7be-bcc598fb" className="div-block-2"><img src="../../../src/assets/images/pdf-lock.webp" loading="lazy" alt="" className="image-3"/>
          <div className="div-block-3">
            <h2 className="heading-13">Protect a PDF</h2>
            <p className="paragraph-small">Encrypt your PDF to stop it being read by unauthorized parties</p>
          </div>
        </div>
        <div id="w-node-_4237ba21-215d-52f4-69ee-cbaf9feb568d-bcc598fb" className="div-block-2"><img src="../../../src/assets/images/pdf-unlock.webp" loading="lazy" alt="" className="image-3"/>
          <div className="div-block-3">
            <h2 className="heading-13">Decrypt a PDF</h2>
            <p className="paragraph-small">Decrypt a protected PDF file</p>
          </div>
        </div>
        <div id="w-node-_749701b2-bf00-8ddf-6efd-5ac74cc8da18-bcc598fb" className="div-block-2"><img src="../../../src/assets/images/pdf-merge.webp" loading="lazy" alt="" className="image-3"/>
          <div className="div-block-3">
            <h2 className="heading-13">Merge your PDFs</h2>
            <p className="paragraph-small">Merge multiple PDFs to a single document</p>
          </div>
        </div>
        <div id="w-node-f74547ec-a9d7-93bd-358f-6b95a3ca8cff-bcc598fb" className="div-block-2"><img src="../../../src/assets/images/pdf-split.webp" loading="lazy" alt="" className="image-3"/>
          <div className="div-block-3">
            <h2 className="heading-13">Separate a PDF</h2>
            <p className="paragraph-small">Split your PDF or save a single page</p>
          </div>
        </div>
        <div id="w-node-e147ab86-64ec-c5e0-90b6-8b19d602b366-bcc598fb" className="div-block-2"><img src="../../../src/assets/images/pdf-edit.webp" loading="lazy" alt="" className="image-3"/>
          <div className="div-block-3">
            <h2 className="heading-13">Edit a PDF</h2>
            <p className="paragraph-small">Modify your PDF the way you want it</p>
          </div>
        </div>
        <div id="w-node-_2651ea8a-6b3c-83b2-32a4-dbee58f5e92d-bcc598fb" className="div-block-2"><img src="../../../src/assets/images/pdf-rotate.webp" loading="lazy" alt="" className="image-3"/>
          <div className="div-block-3">
            <h2 className="heading-13">Rotate a PDF</h2>
            <p className="paragraph-small">Rotate a PDF the way you want it</p>
          </div>
        </div>
        <div id="w-node-ad1e3a6e-0b2e-02f9-dcba-070c5f474793-bcc598fb" className="div-block-2"><img src="../../../src/assets/images/pdf-compress.webp" loading="lazy" alt="" className="image-3"/>
          <div className="div-block-3">
            <h2 className="heading-13">Compress a PDF</h2>
            <p className="paragraph-small">Compress your PDF to reduce its size</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section wf-section">
    <div className="w-layout-blockcontainer container button w-container">
      <div className="div-block-4">
        <a href="#" className="button _2 w-button">Discover all our PDF tools</a>
      </div>
    </div>
  </section>
  <section className="section wf-section">
    <div className="w-layout-blockcontainer container w-container">
      <div className="grid22"><img src="../../../src/assets/images/feature.webp" loading="lazy" id="w-node-e29b56bd-e9f5-5d35-f8d4-dccd57e23061-bcc598fb" sizes="(max-width: 479px) 100vw, (max-width: 767px) 52vw, (max-width: 991px) 54vw, 39vw" srcset="images/feature-p-500.webp 500w, images/feature-p-800.webp 800w, images/feature.webp 1075w" alt="" className="image-6"/>
        <div id="w-node-_05a65bf3-4ccb-4937-8dc5-5b5f413072b1-bcc598fb" className="heading-para">
          <h2 className="heading-25"><strong>Add a signature to your PDF</strong></h2>
          <p className="paragraph-5">Sign all your PDF documents in one simple action: with your mouse, touchpad or touchscreen. With the electronic signature, your files are validated and protected.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="section wf-section">
    <div className="w-layout-blockcontainer container w-container">
      <div className="grid22"><img src="../../../src/assets/images/mobile.webp" loading="lazy" id="w-node-_05b8b451-24da-61a5-0e04-672ee173088f-bcc598fb" sizes="(max-width: 479px) 100vw, (max-width: 767px) 52vw, (max-width: 991px) 54vw, 39vw" srcset="images/mobile-p-500.webp 500w, images/mobile.webp 625w" alt="" className="image-6"/>
        <div id="w-node-_05b8b451-24da-61a5-0e04-672ee1730890-bcc598fb" className="heading-para">
          <h2 className="heading-26"><strong className="bold-text-2">Edit your PDFs from your Smartphone</strong></h2>
          <p className="paragraph-5">With PDF Whiz, you can use your online PDF tools from your Smartphone. Ideal for modifying, converting, signing or protecting files at your fingertips – even when you’re on the move.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="section wf-section">
    <div className="w-layout-blockcontainer container w-container">
      <div className="grid3">
        <div id="w-node-_1c96d7bf-0167-b98a-da4d-3c9e95c2b1ff-bcc598fb" className="div-block-5">
          <h2><strong>Limited 1 week access</strong></h2>
          <h4 className="heading-14">£1.00</h4>
          <p className="paragraph-8">Get the main features of our software via a limited trial version accessible for one week and renewing after the trial period expires into a monthly subscription at the price of £29.90.</p>
        </div>
        <div id="w-node-f4e8d479-e4a9-4bf4-abb0-dfb484066004-bcc598fb" className="div-block-5">
          <h2><strong>Unlimited 1 week access</strong></h2>
          <h4 className="heading-15">£1.00</h4>
          <p className="paragraph-9">Get the main features of our software via a limited trial version accessible for one week and renewing after the trial period expires into a monthly subscription at the price of £29.90.</p>
        </div>
        <div id="w-node-_3910b576-5750-e85b-aa57-59bfdee9b2ac-bcc598fb" className="div-block-5 year">
          <h2><strong>1 year unlimited access</strong></h2>
          <h4 className="heading-16">£79.00</h4>
          <p className="paragraph-10">Enjoy all the features of the PDFWhiz software for a single payment of £79.00 giving access to the most complete version of the platform for one year.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="section wf-section">
    <div className="w-layout-blockcontainer container blue w-container">
      <h1 className="heading-17"><strong className="bold-text-4">Try PDF Whiz free of charge</strong></h1>
      <p className="paragraph-11">Our 7-day free trial gives you unlimited access to all our tools for managing your PDF files more easily. Try it out today!</p>
      <a href="#" className="button white w-button">Start your free trial now</a>
    </div>
  </section>
  <section className="section bottom wf-section">
    <div className="w-layout-blockcontainer container w-container">
      <h2 className="heading-18">Enjoy all the benefits of PDF Smart</h2>
      <div className="grid3">
        <div id="w-node-edd6dede-df22-60ad-46f9-9b91067dba57-bcc598fb" className="div-block-5 bottom"><img src="../../../src/assets/images/why1.webp" loading="lazy" alt="" className="image-7"/>
          <h2><strong>An all-in-one tool</strong></h2>
          <p className="paragraph-8">With PDF Whiz, all tools are accessible via a single online interface.<br/>You can convert, modify, protect, resize, split and even sign any document, all in one place.</p>
        </div>
        <div id="w-node-_99986f4d-7ce7-8ce4-bc25-69a441f7a16e-bcc598fb" className="div-block-5 bottom"><img src="../../../src/assets/images/why2.webp" loading="lazy" alt="" className="image-7"/>
          <h2><strong>Total compatibility</strong></h2>
          <p className="paragraph-8">You can access PDF Whiz&#x27;s tools on all major browsers (Google Chrome, Mozilla Firefox, etc.) and operating systems (Windows, Apple, iOS, etc.), and apply PDF Smart tools to all the main file formats (PDF, DOC, PPT, JPG, ODT and TIFF).</p>
        </div>
        <div id="w-node-a4f6bcec-be30-a581-9803-1426f76c588d-bcc598fb" className="div-block-5 bottom"><img src="../../../src/assets/images/why3.webp" loading="lazy" alt="" className="image-7"/>
          <h2><strong>Popular software</strong></h2>
          <p className="paragraph-8">Just like you, many users trust PDF Whiz to modify, convert or protect their PDF files online.<br/>Join a community that is constantly growing.And to meet all of your file management needs, we are always innovating so that we can offer you more and more solutions.</p>
        </div>
        <div id="w-node-_16cd6dec-7dce-894d-1d85-d9ace7f08e9e-bcc598fb" className="div-block-5 bottom"><img src="../../../src/assets/images/why4.webp" loading="lazy" alt="" className="image-7"/>
          <h2><strong>Easy to use</strong></h2>
          <p className="paragraph-8">PDF Whiz tools require no technical knowledge.<br/>A few seconds is all it takes to convert or edit your PDF file online, using your browser.<br/>Wherever you are, all you have to do is upload your file to the platform so that you can modify it when you want.It’s as easy as that!</p>
        </div>
        <div id="w-node-_5689d92d-043c-3e76-c5da-6a5d687e63fa-bcc598fb" className="div-block-5 bottom"><img src="../../../src/assets/images/why5.webp" loading="lazy" alt="" className="image-7"/>
          <h2><strong>An expert by your side</strong></h2>
          <p className="paragraph-8">Need help?<br/>Our customer service department is available at all times to answer your questions and to simplify the management of your files.<br/>You can contact the department by e-mail, 24 hours a day, 7 days a week to obtain a rapid response. After all, a problem shared is a problem halved!</p>
        </div>
        <div id="w-node-c7d429fa-6b73-ceb9-b2db-5a6e73f5afcf-bcc598fb" className="div-block-5 bottom"><img src="../../../src/assets/images/why6.webp" loading="lazy" alt="" className="image-7"/>
          <h2><strong>Industry Standard Security</strong></h2>
          <p className="paragraph-8">To protect all of your documents (PDF, Word, JPEG, etc.) in the best possible way, PDF Whiz guarantees that they are encrypted when they are uploaded to the platform.<br/>Thanks to compliance with 256-bit Advanced Encryption Standard (AES) and 128-bit ARC-FOUR Encryption Standard (ARC4), you can be certain that your information is protected and in safe hands.Relax – PDF Whiz will handle everything!</p>
        </div>
      </div>
    </div>
  </section>
  
  </div>
  )
}

export default Home