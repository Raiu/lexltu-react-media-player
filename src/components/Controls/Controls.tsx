export function Controls() {
    return (
        <div
            id="controls"
            className="flex gap-2"
            style={{ justifyContent: "center", padding: "1rem" }}
        >
            <button id="repeat" className="button icon-button">
                <i className="lni lni-spinner-arrow"></i>
            </button>
            <button id="previous" className="button icon-button">
                <i className="lni lni-backward"></i>
            </button>
            <button id="play" className="button icon-button">
                <i className="lni lni-play"></i>
            </button>
            <button id="next" className="button icon-button">
                <i className="lni lni-forward"></i>
            </button>
            <button id="shuffle" className="button icon-button">
                <i className="lni lni-shuffle"></i>
            </button>
        </div>
    );
}
