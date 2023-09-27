import React from 'react';
import Theme from '../Theme/Theme';

import Waves from '../Waves/Waves';

export default class ThemeList extends React.Component {
    
    createThemesList = () => {
        const { data, clickHandle } = this.props;
        return data
                    .map(({ theme, words }) => <Theme themeName={ theme } wordsNumber={ words.length } key={ theme } clickHandle={ clickHandle } />)
    }

    render () {
        return (
            <>
            
            <ul className='themeList__wrap'>
                {this.createThemesList()}
            </ul>
            <Waves />
            </>
        )
    }
}