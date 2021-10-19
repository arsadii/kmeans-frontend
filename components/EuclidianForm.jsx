import React from "react";

export default function EuclidianForm() {
  return (
    <div className="absolute w-full h-full flex items-center justify-center">
      <div className="bg-white w-1/2 flex flex-col space-y-3">
        <h1 className="text-gray-800 italic text-xl">Euclidian Distance</h1>
        <form>
          <div className="">
            <label htmlFor="x_mahasiswa">X Mahasiswa</label>
            <input type="number" name="x_mahasiswa" className="" />
          </div>
          <div className="">
            <label htmlFor="y_mahasiswa">Y Mahasiswa</label>
            <input type="number" name="y_mahasiswa" className="" />
          </div>
          <div className="">
            <label htmlFor="x_centeroid">X Centeroid</label>
            <input type="number" name="x_centeroid" className="" />
          </div>
          <div className="">
            <label htmlFor="y_centeroid">Y Centeroid</label>
            <input type="number" name="y_centeroid" className="" />
          </div>
          <div className="">
            <button className="border-2 border-gray-800 text-gray-800 px-3 py-2">
              Batal
            </button>
            <button className="border-2 border-gray-800 bg-gray-800 text-white font-bold px-3 py-2">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
