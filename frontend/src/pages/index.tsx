import Head from 'next/head';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <Head>
                <title>Wormhole</title>
                <meta name="description" content="Explore the depths of Wormhole."/>
                <link rel="icon" href="/vercel.svg"/>
            </Head>

            <header className="w-full bg-blue-600 text-white py-4 shadow-md">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">Wormhole</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" className="hover:underline">
                                    Home
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Wormhole</h2>
                <p className="text-lg text-gray-600 text-center">
                    Dive into a universe of challenges and discoveries.
                </p>
                <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
                    Get Started
                </button>
            </main>

            <footer className="w-full bg-gray-800 text-gray-300 py-4">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; {new Date().getFullYear()} Wormhole. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
