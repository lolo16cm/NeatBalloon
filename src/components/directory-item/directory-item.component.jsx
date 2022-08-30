import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles';

import { Link } from 'react-router-dom';


const DirectoryItem = ({ category }) => {
    const { imageUrl, title, subtitle, route } = category;


    return (
        <DirectoryItemContainer >

            <BackgroundImage imageUrl={imageUrl} />

            <Body>

                <h2><Link to={route}>{title} </Link></h2>
                <p><Link to={route}>{subtitle} </Link></p>
            </Body>
        </DirectoryItemContainer>
    );
};


export default DirectoryItem;