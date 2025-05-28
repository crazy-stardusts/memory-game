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
        <div>
            <h1>Available Themes</h1>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {themes && themes.map((theme) => (
                    <ThemeBox theme={theme} key={theme.id} onClick={() => onClickTheme(theme.id)} />
                ))}
            </div>
        </div>
    );
}

export default Theme;