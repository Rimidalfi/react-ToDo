export default function Button({caption, classname, onClickHandler})
{

    const btn_const = "BTN";

    return (
        <button className={classname} onClick={() => onClickHandler(btn_const)}>{caption}</button>
    
    );

}