import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-100 py-1 text-center border-t border-slate-200 flex flex-col md:flex-col justify-center items-center space-y-2 md:space-y-0 md:space-x-4 -z-50">
      <p className="text-gray-700 font-semibold text-sm">
        © 2024 Kitchen Needs. All Rights Reserved.
      </p>
      <a className="text-slate-500 text-[8px] italic underline " href="https://github.com/Er-Sadiq" >
        Dev ⎯ @Er-Sadiq
      </a>
    </footer>
  );
}

export default Footer;
