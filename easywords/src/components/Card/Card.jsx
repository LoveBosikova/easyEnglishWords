const Title = (props) => {
    const {word, transcription} = props;
    return (
        <div className="card__wordWrap">
            <h2 className="card__title">{word}</h2>
            <p className="card__transcription">{transcription}</p>
        </div>
    )
}

const Translate = (props) => {
    const {translate} = props; 
    return (
        <p className="card__text">{translate}</p>
    )
}

const Body = (props) => <div className="card__body">{props.children}</div>;

export default class Card extends React.Component {
    static Title = Title;
    static Translate = Translate;

    render() {
        return (
            <div className="card">{this.props.children}</div>
        )
    }
}