import './GruvButton.css';

const GruvButton = () => {
    return (
        <a
            href="https://gruvlabel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gruv-button-wrapper"
            style={{ textDecoration: 'none', display: 'inline-block' }}
        >
            <button className="gruv-button">
                <div>
                    GRÜV
                </div>
            </button>
        </a>
    );
};

export default GruvButton;
