export default function Footer({score}) {
    return (
        <div  className='fixed bottom-0 left-0 w-full bg-[#fdf8e6] flex gap-2 text-center items-center justify-center py-5 font-playpen font-bold text-4xl border-t-[0.5px] border-black'>
            {score !== undefined && <p className='text-[#9EA4FF]'>Score : {score}</p> }
        </div>
    )
}

