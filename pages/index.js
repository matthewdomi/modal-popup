import { useState } from 'react';
import Modal from '../components/Modal';
import Image from 'next/image';
import Head from 'next/head';
import { Geolocation, PositionOptions } from '@capacitor/geolocation';

export default function ModalCreen({ children }) {
  const [showModal, setShowModal] = useState();
  const location = async () => {
    const coordinate = await Geolocation.getCurrentPosition();
    console.log(coordinate);
    const newPosition = [
      coordinate.coords.latitude,
      coordinate.coords.longitude,
    ];
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinate.coords.latitude},${coordinate.coords.longitude}.json?`;
    fetch(url).then(async (data) => {
      console.log(data);
    });
  };

  return (
    <>
      <Head>
        <title>Android</title>
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <nav className="bg-slate-500 flex justify-between p-3 ">
          <div className="">Logo</div>
          <div className="flex gap-5">
            <ul className="flex gap-3">
              <li>Contact</li>
              <li>Product</li>
              <li>Element</li>
            </ul>
            <div>Logout</div>
          </div>
        </nav>
        <div>{children}</div>
        <footer className="bg-slate-500 flex justify-between p-6">
          <div>Logo</div>
          <div>items</div>
        </footer>
      </div>
    </>
  );
}
