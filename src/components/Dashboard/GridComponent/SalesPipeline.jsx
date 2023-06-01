import React from 'react'

export default function SalesPipeline() {
  return (
    <div>
        <div className='bg-white p-6 rounded-md shadow w-full relative'>
            <div className='flex items-start justify-between gap-3'>
                <div className='flex items-center gap-3'>
                    <p className="font-medium text-sm">Sales Pipeline</p>
                    <div className='relative text-grey'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-2 left-2' width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path></svg>
                    <select className='form-select pl-8 pr-8 py-1.5 rounded-md focus:ring-0 focus:border-gray-300 bg-gray-50 text-sm border border-gray-300'>
                        <option>This Month</option>
                        <option>Last Month</option>
                        <option>This Year</option>
                    </select>
                    </div>
                </div>
                <div className='flex-none'>
                    <div className='border-b border-grey/40 pb-4 mb-4 text-right'>
                        <h6 className='text-2xl font-semibold text-black mb-1.5'>$1,195,500</h6>
                        <p className='text-xs text-grey text-right font-medium'>Total Amount</p>
                    </div>
                    <div className='text-right'>
                        <h6 className='text-2xl font-semibold text-black mb-1.5'>89</h6>
                        <p className='text-xs text-grey text-right font-medium'>Total Deals</p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}
