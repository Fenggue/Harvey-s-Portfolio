import React from 'react';

const Contact = () => {
  return (
    <section className="bg-[#f7ede8] rounded-xl border border-[#d9b4b1] p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#6f1e21]">Contact</h2>
      <p className="mt-3 text-[#3d2728]">Reach out to me directly using the information below.</p>
      <div className="mt-6 rounded-xl border border-[#d9b4b1] bg-white p-5">
        <p className="text-[#3d2728] font-medium">Email: <a href="mailto:sacpaharvey@gmail.com" className="text-[#7c1d23]">sacpaharvey@gmail.com</a></p>
        <p className="text-[#3d2728] font-medium mt-2">Phone: <a href="tel:0910019928" className="text-[#7c1d23]">0910019928</a></p>
      </div>
    </section>
  );
};

export default Contact;
  