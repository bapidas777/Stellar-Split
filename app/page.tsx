import React from 'react';
export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 p-4 border-b">Stellar Split Navbar</header>
      <main className="py-10 flex justify-center items-start px-6 flex-1">
<div className="w-full max-w-2xl bg-pink-100 rounded-3xl p-12 flex flex-col gap-10">
  <h2>Divide & Conquer</h2>
  <input type="number" placeholder="Total Bill" />
  <button>Pay My Share</button>
</div>
</main>
      <footer className="mt-auto p-4 border-t">Footer</footer>
    </>
  );
}
