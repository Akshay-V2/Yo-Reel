import React, { useEffect, useState } from "react";

const Ticker = ({ digits }) => {
    const [digitArray, setDigitArray] = useState([]);

    useEffect(() => {
        const digitStr = String(digits).padStart(4, '0');
        const digitArr = digitStr.split('').map(Number);
        setDigitArray(digitArr);
    }, [digits]);

    useEffect(() => {
        digitArray.forEach((digit, index) => {
            const currentReel = document.getElementById(`r${index + 1}`);
            if (currentReel) {
                currentReel.style.transform = `translateY(${digit * -100}%)`;
            }
        });
    }, [digitArray]);

    return (
        <div className='reel-container'>
            <div className='reel'>
                <div className='reel-display'>
                    <div className='reel-roller' id="r1">
                        <div className='reel-numbers'>0</div>
                        <div className='reel-numbers'>1</div>
                        <div className='reel-numbers'>2</div>
                        <div className='reel-numbers'>3</div>
                        <div className='reel-numbers'>4</div>
                        <div className='reel-numbers'>5</div>
                        <div className='reel-numbers'>6</div>
                        <div className='reel-numbers'>7</div>
                        <div className='reel-numbers'>8</div>
                        <div className='reel-numbers'>9</div>
                    </div>
                </div>
                <div className='reel-display'>
                    <div className='reel-roller' id="r2">
                        <div className='reel-numbers'>0</div>
                        <div className='reel-numbers'>1</div>
                        <div className='reel-numbers'>2</div>
                        <div className='reel-numbers'>3</div>
                        <div className='reel-numbers'>4</div>
                        <div className='reel-numbers'>5</div>
                        <div className='reel-numbers'>6</div>
                        <div className='reel-numbers'>7</div>
                        <div className='reel-numbers'>8</div>
                        <div className='reel-numbers'>9</div>
                    </div>
                </div>
                <div className='reel-display'>
                    <div className='reel-roller' id="r3">
                        <div className='reel-numbers'>0</div>
                        <div className='reel-numbers'>1</div>
                        <div className='reel-numbers'>2</div>
                        <div className='reel-numbers'>3</div>
                        <div className='reel-numbers'>4</div>
                        <div className='reel-numbers'>5</div>
                        <div className='reel-numbers'>6</div>
                        <div className='reel-numbers'>7</div>
                        <div className='reel-numbers'>8</div>
                        <div className='reel-numbers'>9</div>
                    </div>
                </div>
                <div className='reel-display'>
                    <div className='reel-roller' id="r4">
                        <div className='reel-numbers'>0</div>
                        <div className='reel-numbers'>1</div>
                        <div className='reel-numbers'>2</div>
                        <div className='reel-numbers'>3</div>
                        <div className='reel-numbers'>4</div>
                        <div className='reel-numbers'>5</div>
                        <div className='reel-numbers'>6</div>
                        <div className='reel-numbers'>7</div>
                        <div className='reel-numbers'>8</div>
                        <div className='reel-numbers'>9</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticker;