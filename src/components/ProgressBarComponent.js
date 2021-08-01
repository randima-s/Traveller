
function ProgressBarComponent(props){
    return(
        <div className="progress my-4">
        <div className="progress-bar" style={{width:`${props.progress}%`}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{props.progress} %</div>
        </div>
    );
}

export default ProgressBarComponent;