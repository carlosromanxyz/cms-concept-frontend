interface IFinancialIndicators {
  displayUF: boolean;
  displayIPSA: boolean;
  displayCurrentDolar: boolean;
}

export default function FinancialIndicators({ displayUF, displayIPSA, displayCurrentDolar }: IFinancialIndicators) {
  return (
    <div className='grid grid-cols-3 gap-4 text-white'>
      {displayUF && <span className="bg-gray-500 px-3 py-1 font-bold text-center rounded-xl">UF: $35.555</span>}
      {displayIPSA && <span className="bg-gray-500 px-3 py-1 font-bold text-center rounded-xl">IPSA: $35.555</span>}
      {displayCurrentDolar && <span className="bg-gray-500 px-3 py-1 font-bold text-center rounded-xl">DOLAR: $555</span>}
    </div>
  )
}
