import './App.css';
import { useState } from 'react';
function App() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="App">
     
     <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href={`/`}>
                            <h2 className="text-2xl font-bold text-blue-500 ">EVENNTII</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href={`/Home`}>Home</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href={`/Blog`}>Blog</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href={`/About`}>About US</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href={`/Contact`}>Contact US</a>
                            </li>
                            <li className="text-white hover:text-white bg-blue-500 p-2 rounded-xl">
                                <a href="/Support">Support Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
      <section class="flex items-center m-20 flex-wrap justify-start items-start">
        <div className='flex-1 '>
          <h1 className="text-6xl font-bold text-left mb-5">All in one web3 App</h1>
          <p className='text-left'>Eventii is a mobile app that provides a comprehensive suite of features for managing and utilizing cryptocurrencies in a user-friendly and secure manner. It allows users to easily buy, sell, and store a wide range of digital assets, as well as access various decentralized applications (dApps) and other web 3.0 services. Overall, Eventii is considered the best all-in-one web 3 crypto app due to its combination of convenience, functionality, and security.</p>
        <div className="mt-5">
        <img src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg"width="140"/>
                <img className='mt-1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/800px-Google_Play_Store_badge_EN.svg.png" width="145" />
        </div>
        </div>
        <div className='flex-4'>
          <img src="https://www.citypng.com/public/uploads/small/11664668285w1lxkkw5k2v72a8qlwlp2fav0xs4qg0ymzltyhr6qpat3gbz9rkrrktkxsatimj7wkiqq3xwa45pinhfpu6rwoxcfirf5k6d3qeg.png"/>
        </div>
      </section>
      <section class="flex items-center m-0 flex-wrap bg-blue-500 p-20 flex-col">
        <div className='flex-1'>
          <h1 className="text-3xl font-bold text-center mb-5 text-white ">All in one web3 App</h1>
          <p className='text-left'>lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem</p>
        </div>
        <div className='flex-3'>
          <img src="https://www.citypng.com/public/uploads/small/11664668285w1lxkkw5k2v72a8qlwlp2fav0xs4qg0ymzltyhr6qpat3gbz9rkrrktkxsatimj7wkiqq3xwa45pinhfpu6rwoxcfirf5k6d3qeg.png"/>
        </div>
      </section>
      <section class="flex items-center m-0 flex-wrap bg-white p-20 flex-col">
        <div className='flex-1'>
          <h1 className="text-3xl font-bold text-center mb-5 text-black ">All in one web3 App</h1>
          <p className='text-left'>lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem</p>
        </div>
        <div className='flex-3'>
          <img src="https://www.citypng.com/public/uploads/small/11664668285w1lxkkw5k2v72a8qlwlp2fav0xs4qg0ymzltyhr6qpat3gbz9rkrrktkxsatimj7wkiqq3xwa45pinhfpu6rwoxcfirf5k6d3qeg.png"/>
        </div>
      </section>
    </div>
  );
}

export default App;
