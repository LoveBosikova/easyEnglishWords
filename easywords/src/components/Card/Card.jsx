import React, { useState } from 'react';
import cn from 'classnames';
export default class Card extends React.Component {
    constructor (props) {
        super(props);
        this.state = {isChecked: false};
    }

    handleChange = () => {
        const {isChecked} = this.state;
        this.setState({isChecked: !isChecked});
    };
    
    render() {
        const {id, word, transcription, translate} = this.props; 
        console.log(this.state);
        return (
            <div className="card" key={id}>
                <h2 className="card__title">{word}</h2>
                <p className="card__transcription">{transcription}</p>
                <p className="card__text">{translate}</p>
                <input className="card__checkBox" type="checkbox" name="wordToLearn" id="wordToLearnCheckBox" checked={this.state.isChecked} onChange={this.handleChange}/>
            </div>
        )
    }
}

// import React, { useState } from 'react';
// import cn from 'classnames';
// export default class Card extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {showed: false};
//     }

//     handleChange = () => {
//         this.setState({showed: true})
//     };

//     render() {
//         const {id, word, transcription, translate} = this.props; 
//         const {showed} = this.state;
//         // console.log(key, word, transcription, translate);

//         const innerText = !showed ? 'Показать перевод' : translate;

//         const classNames = cn('card__text', {
//             'card__text--hidden': showed,
//             'card__text--showen': !showed,
//         });

//         return (
//             <div className="card" key={id}>
//                 <div className="card__wordWrap">
//                     <h2 className="card__title">{word}</h2>
//                     <p className="card__transcription">{transcription}</p>
//                 </div>
//                 <p className={classNames} onClick={this.handleChange}>{innerText}</p>
//             </div>
//         )
//     }
// }