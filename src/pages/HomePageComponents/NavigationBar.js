
const NavigationBar = () => {
    return(
        <div className="h-24 flex flex-row items-end">
        <div className="w-1/2"><img className="w-40 h-auto pl-5" src="/skils-LOGO.png"/></div>
        <div className="flex w-1/2 pl-10 pb-6">
            <div className="px-4">Home</div>
            <div className="px-4">About</div>
            <div className="px-4">Productions</div>
            <div className="px-4">Other Works</div>
            <div className="px-4">Gallery</div>
            <div className="px-4">FAQs</div>
            <div className="px-4">Contact Us</div>
        </div>
    </div>
    )
   
}

export default NavigationBar;
