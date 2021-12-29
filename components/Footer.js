function Footer() {
  return (
    <footer className="bg-gray-100 pt-12">
      <div
        className="grid grid-cols-1 md:grid-cols-4 gay-y-10 px-32 py-14
                    text-gray-600 
    "
      >
        <div className="space-y-4 text-lg font-medium text-gray-800 mb-7">
          <h4 className="font-bold">ABOUT</h4>
          <p className="cursor-pointer">How Airbnb works</p>
          <p className="cursor-pointer">Newsroom</p>
          <p className="cursor-pointer">Airbnb 2021</p>
          <p className="cursor-pointer">Investors</p>
          <p className="cursor-pointer">Airbnb Plus</p>
        </div>
        <div className="space-y-4 text-lg font-medium text-gray-800 mb-7">
          <h4 className="font-bold">COMMUNITY</h4>
          <p className="cursor-pointer">Diversity & Belonging</p>
          <p className="cursor-pointer">Accessibility</p>
          <p className="cursor-pointer">Airbnb 2021</p>
          <p className="cursor-pointer">Investors</p>
          <p className="cursor-pointer">Airbnb Plus</p>
        </div>
        <div className="space-y-4 text-lg font-medium text-gray-800 mb-7">
          <h4 className="font-bold">HOST</h4>
          <p className="cursor-pointer">Gift cards</p>
          <p className="cursor-pointer">Cancellation options</p>
          <p className="cursor-pointer">Airbnb 2021</p>
          <p className="cursor-pointer">Investors</p>
          <p className="cursor-pointer">Against Discrimination</p>
        </div>
        <div className="space-y-4 text-lg font-medium text-gray-800 mb-7">
          <h4 className="font-bold">SUPPORT</h4>
          <p className="cursor-pointer">Our COVID-19 Response</p>
          <p className="cursor-pointer">Help Center</p>
          <p className="cursor-pointer">Airbnb 2021</p>
          <p className="cursor-pointer">Investors</p>
          <p className="cursor-pointer">Neighborhood Support</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
