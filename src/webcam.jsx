import Webcam from "react-webcam";
import React, {useState,useRef,useCallback} from "react";

const videoConstraints = {
  width: 640,
  height: 360,
  facingMode: "user"
};

function WebcamCapture ({setPage}) {
    const [cap, setCap] = useState('');
    const [loading, setLoading] = useState(false); 
    const webcamRef = useRef(null);
    const capture = useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setCap(imageSrc)
        console.log("Captured, will display after 2s");
        setLoading(true); // show loading message
        setCap('');  
        setTimeout(() => {
        setCap(imageSrc);
        setLoading(false); 
        }, 2000); 
  }, [webcamRef]);

    return (
            <>
                <div className="flex flex-col md:flex-row mb-[10px] gap-[10px]">
                    <Webcam
                        audio={false}
                        height={360}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={640}
                        videoConstraints={videoConstraints}
                        className="rounded-2xl"
                    />
                    {loading ? (
                    <div className="text-gray-600 italic text-lg flex items-center justify-center">Processing...</div>
                    ) : (
                    cap && <img src={cap} alt="Captured" className="rounded-2xl" />
                    )}
                </div>
                <button
                    className="bg-[#ffdc20] shadow-black shadow-sm rounded-[10px] p-[10px] hover:bg-amber-600 mb-[30px] transition"
                    onClick={capture}
                    disabled={loading}
                >
                    {loading ? 'Please wait...' : 'Capture photo'}
                </button>
                {cap && !loading && (
                    <button
                        type='button'
                        className='bg-[#ffdc20] shadow-black shadow-sm w-[150px] h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer'
                        onClick={() => setPage('hasil-kesehatan')}
                    >
                        Liat hasil
                    </button>
                    )}
            </>
    )
}

export default WebcamCapture;