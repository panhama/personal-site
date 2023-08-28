export default function Polaroid(props) {
    return (
        <div className="polaroid">
            <img src={props.image} alt={props.alt} />
            <div className="caption">{props.caption}</div>
        </div>
    );
}