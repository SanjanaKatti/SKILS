
function Home(){
    return(
      <div>
        <div className="flex flex-row justify-between items-center py-30 border-2">
          <div classname="w-1/2"><img className="w-299 h-155" src="https://skilshruti.com/wp-content/uploads/2020/01/skils-LOGO_compressed-1.png"/></div>
          <div className="flex w-1/2">
              <div className="px-4">Home</div>
              <div className="px-4">About</div>
              <div className="px-4">Productions</div>
              <div className="px-4">Other Works</div>
              <div className="px-4">Gallery</div>
              <div className="px-4">FAQs</div>
              <div className="px-4">Contact Us</div>
          </div>
        </div>
      <div className="h-96 flex justify-center items-end border-2">
        <div className="flex flex-col justify-center items-center">
            <h1>SHRUTI PATKI</h1>
            <h3>KATHAK EXPONENT</h3>
            <div className="flex flew-row justify-between items-center">
              <div className="px-2">FB</div>
              <div className="px-2">Insta</div>
              <div className="px-2">YT</div>
            </div>
        </div>
      </div>
      <div className="h-96 flex flex-col justify-center items-center border-2">
        <div>Abbreviation</div>
        <div>Content</div>
        <div>Button</div>
      </div>
      <div className="h-96 flex flex-col justify-center items-center border-2">
        <div>Online classes</div>
        <div>Stage Performance</div>
        <div>Professional Training</div>
      </div>
      <div className="h-96 flex flex-col items-center border-2">
        <div><h1 className="text-4xl">Gallery</h1></div>
        <div><h3>Images</h3></div>
      </div>
      <div className="h-96 flex flex-row justify-between items-center border-2">
        <div className="h-1/3 w-1/5 flex justify-center items-center border p-5">Students</div>
        <div className="h-1/3 w-1/5 flex justify-center items-center border p-5">Branches</div>
        <div className="h-1/3 w-1/5 flex justify-center items-center border p-5">Performances</div>
        <div className="h-1/3 w-1/5 flex justify-center items-center border p-5">Awards</div>
      </div>
      <div className="h-24 flex flex-row justify-between items-center border-2">
        <div className="text-2xl">Please Follow and Subscribe</div>
        <div className="flex flex-row items-end">
          <div className="px-2">FB</div>
          <div className="px-2">Insta</div>
          <div className="px-2">Youtube</div>
        </div>
      </div>
      <div className="h-96 flex flex-row justify-center border-2">
        <div>Form</div>
      </div>
      <div className="h-24 flex flex-row justify-center border-2">
        Footer
      </div>
    </div>
    );
}

export default Home;