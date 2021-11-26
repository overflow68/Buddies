import React from 'react'


function Message(props) {
    return (
        <div className={props.class}>
            {props.class !== "msg sent"?
            <div className="cont-received"  >
                            <img className="img" src={props.img} alt="" />
                            <div className="received-text"><p>{props.msg}</p></div>
                        </div>:
                        <div className="cont-sent" key={props.id} >
                        <div className="sent-text"><p>{props.msg}</p></div>
                        <img className="img" src={props.img} alt="" />
                    </div>
                        }
        </div>
    )
}

export default Message
