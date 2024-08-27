import './Dialog.css'
import { useState, useEffect, useRef } from 'react'

function Dialog() {
    const [ dialog, setDialog] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
    const [ currentDialog, setCurrentDialog ] = useState("");
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ typing, setTyping ] = useState(true);
    const [ triangle, setTriangle ] = useState("triangle hover-cursor");
    const [ currentState, setCurrentState ] = useState("Listening");
    const [ customer, setCustomer ] = useState("Customer");
    const [ dotIndex, setDotIndex ] = useState(0);

    const states = ["Listening", "Observing", "Waiting", "Deciding", "Speaking"];
    const dots = ["" , ".", "..", "...", "..", "."];

    const userInputRef = useRef(null);

    useEffect(() => {
        let timeout;
  
        if (currentIndex < dialog.length && typing) {

          timeout = setTimeout(() => {
            setCurrentDialog((prevText) => prevText + dialog[currentIndex]);
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }, 40);

        } else {
            setTyping(false);
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, typing]);

    useEffect(() => {
        let timeout;

        timeout = setTimeout(() => {
            if (triangle === "triangle hover-cursor") {
                setTriangle("triangle hover-cursor invisible");
            } else {
                setTriangle("triangle hover-cursor");
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [triangle]);

    useEffect(() => {
        let timeout;

        if (currentState == "Waiting") {
            timeout = setTimeout(() => {
                setDotIndex((dotIndex + 1) % dots.length);
            }, 300);
        }

        return () => clearTimeout(timeout);
    }, [dotIndex, currentState]);

    const handleClick = () => {
        if (currentState == "Listening" && typing) {
            setCurrentDialog(dialog);
            setCurrentIndex(dialog.length);
            setTyping(false);
        } else if (currentState == "Listening" || currentState == "Observing") {
            handleNext();
        }
    }

    const handleNext = () => {
        setCurrentIndex(0);
        setCurrentDialog("");
        setCurrentState("Deciding");
    }

    const handleListen = () => {
        setCurrentState("Waiting");
        setDotIndex(0);

        setTimeout(() => {
            setTyping(true);
            setCurrentState("Listening");
        }, 3000);

    }

    const handleSpeak = () => {
        setCurrentState("Waiting");
        setDotIndex(0);

        if (userInputRef.current) {
            const content = userInputRef.current.textContent;
            userInputRef.current.textContent = "";
            console.log(content);
        }

        setTimeout(() => {
            setTyping(true);
            setCurrentState("Listening");
        }, 3000);
    }

  return (
    <>
        <div className='dialog-outer'>
            <div className='scroll-bar'></div>
            <div className="dialog" onClick={handleClick}>
                {
                (currentState == "Listening") ?
                (<div className='listening'>
                    <p><span>{customer} :</span> {currentDialog}</p>
                    <svg 
                        className={triangle}
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 100 100"
                    >
                        <polygon points="50,90 90,10 10,10" fill="white" />
                    </svg>
                </div>)
                :
                (currentState == "Deciding") ?
                (<div className='deciding'>
                    <button onClick={handleListen}>Listen</button>
                    <button onClick={() => setCurrentState("Speaking")}>Speak</button>
                </div>)
                :
                (currentState == "Waiting") ?
                (<div className='waiting'>
                    <p>{customer} appears to be in thought{dots[dotIndex]}</p>
                </div>)
                :
                (<div className='speaking'>
                    <p className='user-edit' contentEditable="true"  ref={userInputRef}></p>
                    <button onClick={handleSpeak}>Speak</button>
                </div>)
                }
            </div>
        </div>
    </>
  )
}

export default Dialog
