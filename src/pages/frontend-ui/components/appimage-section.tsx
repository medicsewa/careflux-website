import { Smile, ShoppingBag, Crown } from 'lucide-react';

const AppImage = () => {
  return (
    <div className="relative">
      <div className="w-full max-w-sm mx-auto relative z-10 ">
          <img 
            src="/1.png" 
            alt="" 
            className="w-full object-cover  "
          />
        
        <div className="absolute -right-2 top-10 z-20 animate-bounce-subtle" style={{ animationDelay: '1s' }}>
          <div className="bg-white rounded-full p-2  animate-pulse-glow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#9b87f5" strokeWidth="2"/>
              <path d="M8 12L11 15L16 9" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="absolute -left-2 top-1/4 z-20 animate-bounce-subtle" style={{ animationDelay: '1.5s' }}>
          <div className="bg-white rounded-full p-2 x animate-pulse-glow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C13.1819 22 14.3522 21.7672 15.4442 21.3149C16.5361 20.8626 17.5282 20.1997 18.364 19.364C19.1997 18.5282 19.8626 17.5361 20.3149 16.4442C20.7672 15.3522 21 14.1819 21 13C21 11.8181 20.7672 10.6478 20.3149 9.55585C19.8626 8.46392 19.1997 7.47177 18.364 6.63604C17.5282 5.80031 16.5361 5.13738 15.4442 4.68508C14.3522 4.23279 13.1819 4 12 4L12 13V22Z" stroke="#9b87f5" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[280px] bg-luxury-purple opacity-20 blur-3xl -z-10 animate-pulse-glow"></div>
      
      <div className="hidden md:block absolute top-0 right-0 animate-float-smooth" style={{ animationDelay: '0.2s' }}>
        <div className="rounded-full w-10 h-10 bg-luxury-purple flex items-center justify-center text-white ">
          <Smile size={18} className="animate-pulse-light" />
        </div>
      </div>
      <div className="hidden md:block absolute top-36 right-16 animate-float-smooth" style={{ animationDelay: '1.2s' }}>
        <div className="rounded-full w-10 h-10 bg-luxury-purple flex items-center justify-center text-white ">
          <Crown size={18} className="animate-pulse-light" />
        </div>
      </div>
      <div className="hidden md:block absolute bottom-20 left-20 animate-float-smooth" style={{ animationDelay: '0.7s' }}>
        <div className="rounded-full w-10 h-10 bg-luxury-purple flex items-center justify-center text-white  animate-pulse-glow">
          <ShoppingBag size={18} className="animate-pulse-light" />
        </div>
      </div>
      
      <div className="absolute top-[10%] right-0 w-2 h-2 bg-luxury-purple rounded-full opacity-70"></div>
      <div className="absolute bottom-[15%] left-0 w-3 h-3 bg-luxury-purple rounded-full opacity-70"></div>
      <div className="absolute top-[40%] right-[10%] w-2 h-2 bg-luxury-purple rounded-full opacity-70"></div>
    </div>
  );
};

export default AppImage;
