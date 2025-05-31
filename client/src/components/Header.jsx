export default function Header({color}) {
    const colorHex = color || '#9EA4FF'; // Default color if not provided
    return (
        <div  className='bg-[#fdf8e6] flex gap-2 text-center items-center justify-center py-5 font-playpen font-bold higlight-stroke text-4xl border-b-[0.5px] border-black'>
            <p className='text-[#9EA4FF]'>Zap</p> 
            <p className={`text-[${colorHex}]`}>'n'</p> 
            <p className='text-[#9EA4FF]'>Match</p>
        </div>
    )
}

