import React from 'react';

interface DescriptionWidgetProps {
  syncedHeight?: number;
}

const DescriptionWidget = ({ syncedHeight }: DescriptionWidgetProps) => {
  return (
    <div
      className="p-[1px] rounded-[10px] bg-[linear-gradient(to_bottom,rgb(120,120,120),rgba(255,255,255,0.15))] w-fit m-0 mx-auto self-start"
      style={{ height: syncedHeight || 'auto' }}
    >
      <div className="p-6 w-[45vw] h-full bg-gradient-to-b from-[#141414] to-[#1b1b1b] rounded-xl text-white border border-white/20">
        <div className='overflow-y-auto h-full custom-scrollbar'>
          <h2 className="text-2xl font-light mb-4">Descriere</h2>
          <p className="mb-6 font-light text-xl">
            Model: <strong>Porsche 911 (992) Turbo S</strong> | Sonderwunsch | Motor 3.8 | 650 CP
          </p>
          <div className="space-y-1 font-light leading-relaxed text-md">
            <p>"Sport" buton</p>
            <p>– Adaptiv scaune Sport incl. reglaj scaun 18-cai si pachet</p>
            <p>– Memory</p>
            <p>– Airbag cortina fata (Thoraxbag)</p>
            <p>– Airbag pe partea pilotului / copilotului</p>
            <p>– Airbag-uri cortina Porsche Side Impact Protection System</p>
            <p>– (POSIP)</p>
            <p>– Blocaj anti-pornire</p>
            <p>– Carlig haine spatar scaun piele</p>
            <p>– Caroserie: 2-usi</p>
            <p>– Connect Plus (Bluetooth, Apple CarPlay, WLAN, VehicleTracking-System – sistem localizare vehicul)</p>
            <p>– Cuplare automata pentru lumina de drum</p>
            <p>– Cutie viteze 8 viteze – cutie viteze cu ambreiaj dublu</p>
            <p>– (PDK)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionWidget;
