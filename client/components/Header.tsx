import React from 'react';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 px-4 pt-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-black/70 backdrop-blur-sm rounded-full shadow-lg border border-white/10 px-6 py-4">
          {/* Logo */}
          <div className="absolute left-6 top-0 -translate-y-2">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d72f18c6fc79d14b355c8d2eb1f0366a80f24638?width=244" 
              alt="ARKKHE Logo" 
              className="w-24 h-24 aspect-square"
            />
          </div>

          <div className="flex items-center justify-between pl-28">
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#servicos" className="text-white font-inter text-lg font-light hover:text-white/80 transition-colors">
                Serviços
              </a>
              <a href="#sobre" className="text-white font-inter text-lg font-light hover:text-white/80 transition-colors">
                Sobre
              </a>
              <a href="#portfolio" className="text-white font-inter text-lg font-light hover:text-white/80 transition-colors">
                Portfólio
              </a>
              <a href="#dashboard" className="text-white font-inter text-lg font-light hover:text-white/80 transition-colors">
                Dashboard
              </a>
            </nav>

            {/* Right side - WhatsApp and CTA */}
            <div className="flex items-center space-x-4">
              {/* WhatsApp Icon */}
              <a href="https://wa.me/" className="opacity-80 hover:opacity-100 transition-opacity">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.8">
                    <path fillRule="evenodd" clipRule="evenodd" d="M32.1615 9.849C30.7079 8.38692 28.9788 7.22763 27.0742 6.43821C25.1696 5.6488 23.1273 5.24494 21.0656 5.25C12.4228 5.25 5.38125 12.285 5.38125 20.9278C5.37582 23.6797 6.09755 26.3841 7.47337 28.7674L5.25 36.8931L13.566 34.7091C15.8655 35.9616 18.4419 36.619 21.0604 36.6214H21.0669C29.7111 36.6214 36.7447 29.5877 36.75 20.9383C36.75 16.7501 35.1199 12.8126 32.1615 9.84769V9.849ZM21.0656 33.9714H21.0604C18.7262 33.9714 16.4348 33.3445 14.4257 32.1563L13.9493 31.8741L9.01163 33.1669L10.3294 28.3566L10.0223 27.8644C8.71552 25.787 8.02383 23.382 8.02725 20.9278C8.02725 13.7458 13.8771 7.90125 21.0709 7.90125C22.783 7.89676 24.4789 8.23203 26.0605 8.88764C27.6421 9.54325 29.0778 10.5062 30.2846 11.7206C31.4972 12.9293 32.4584 14.3661 33.1128 15.9482C33.7672 17.5303 34.1019 19.2262 34.0974 20.9383C34.0974 28.1269 28.2489 33.9714 21.0656 33.9714ZM28.2122 24.2091C27.8224 24.0148 25.8943 23.0672 25.536 22.9386C25.1777 22.8047 24.9152 22.743 24.654 23.1328C24.3915 23.5266 23.6434 24.4099 23.4137 24.6711C23.1879 24.927 22.9569 24.9638 22.5671 24.7682C22.1734 24.5739 20.9121 24.1579 19.4145 22.8204C18.2503 21.7836 17.4615 20.4973 17.2358 20.1075C17.0048 19.7138 17.2095 19.5038 17.4051 19.3069C17.5836 19.1336 17.7988 18.8514 17.9944 18.6204C18.1886 18.396 18.2569 18.2319 18.3881 17.9694C18.5168 17.7083 18.4511 17.4773 18.3527 17.283C18.2556 17.0888 17.472 15.1554 17.1439 14.3706C16.8249 13.6067 16.5021 13.7143 16.2619 13.6999C16.0361 13.6894 15.7749 13.6894 15.5138 13.6894C15.2512 13.6894 14.826 13.7865 14.4664 14.1816C14.1081 14.5714 13.0974 15.5203 13.0974 17.4471C13.0974 19.3751 14.5018 21.2402 14.6987 21.5027C14.8929 21.7586 17.4615 25.7158 21.3924 27.4142C22.121 27.7289 22.8658 28.0044 23.6237 28.2398C24.5621 28.5364 25.4179 28.4957 26.0951 28.3973C26.8485 28.2857 28.4117 27.4496 28.7398 26.5322C29.064 25.62 29.064 24.8351 28.9656 24.6711C28.8684 24.507 28.6073 24.4086 28.2122 24.2091Z" fill="white"/>
                  </g>
                </svg>
              </a>

              {/* CTA Button */}
              <button className="bg-neutral-300 text-black font-inter text-lg font-bold px-8 py-3 rounded-full hover:bg-neutral-200 transition-colors">
                Começar Agora
              </button>
            </div>
          </div>

          {/* Mobile menu button - hidden for now, can be added later */}
          <div className="md:hidden">
            {/* Mobile menu implementation can be added here */}
          </div>
        </div>
      </div>
    </header>
  );
}
