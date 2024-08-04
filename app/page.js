import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-grow justify-center items-center">
      <div className="bg-white shadow rounded-xl p-8 m-4 w-96">
        <h2 className="text-2xl font-bold mb-4">Mint Celestial NFT</h2>
        <p className="text-gray-700 mb-4">Get your exclusive NFT for just 0.001 ETH</p>
        <button className="bg-green-500 text-white w-full py-2 rounded-xl hover:bg-green-600">MINT</button>
      </div>
    </div>
  );
}
