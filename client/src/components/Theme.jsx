import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { getAllTheme } from '../apis/game'
import ThemeBox from './ThemeBox';

function Theme() {

    const [themes, setThemes] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect( () => {
        const fetchThemes = async () => {
            try {
                const data = await getAllTheme();
                setThemes(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching themes:");
                setLoading(true);
            }
        };
        fetchThemes();
    }, []);

    function onClickTheme(themeId) {
        console.log("Selected theme:", themeId);
        navigate('/game?themeId=' + themeId);
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className='relative min-h-screen flex items-stretch bg-[#fdf8e6] overflow-hidden' >
            <div className='absolute inset-0 z-0' >
                <div className='w-full h-full clip-slant bg-white' />
            </div>
            <div className='w-1/3 flex items-center justify-center z-10'>
                <div className='text-center font-bold text-7xl leading-snug font-playpen higlight-stroke'>
                    <p className='text-[#9EA4FF]'>Zap</p>
                    <p className='text-[#FFE559]'>`n`</p>
                    <p className='text-[#9EA4FF]'>Match</p>
                </div>
            </div>
            <div className='w-2/3 flex items-center justify-center z-10'>
                <div className='grid grid-cols-2 gap-4'>
                    {themes && themes.map((theme) => (
                        <ThemeBox theme={theme} key={theme.id} onClick={() => onClickTheme(theme.id)} />
                    ))}
                </div>
            </div>  
        </div>
    );
}

export default Theme;

/*

            <div >


            </div>
            <div className='relative z-10 p-10 flex flex-col items-center md:flex-row gap-80'>
                <div className='text-center md:text-left font-bold text-5xl leading-snug '>
                    <p className='text-[#9EA4FF]'>Zap</p>
                    <p className='text-[#FFE559]'>`n`</p>
                    <p className='text-[#9EA4FF]'>Match</p>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    {themes && themes.map((theme) => (
                        <ThemeBox theme={theme} key={theme.id} onClick={() => onClickTheme(theme.id)} />
                    ))}
                </div>
            </div>

*/